import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

type LeadSource = "newsletter" | "guide" | "documentation" | "popup";

export type LeadPayload = {
  email: string;
  source: LeadSource;
  fullName?: string;
  phone?: string;
};

export type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  message: string;
  budgetRange: string;
  spaceType: string;
};

type PersistedRecord<T> = T & {
  id: string;
  createdAt: string;
};

type LeadStore = {
  newsletter: Array<PersistedRecord<LeadPayload>>;
  guide: Array<PersistedRecord<LeadPayload>>;
  documentation: Array<PersistedRecord<LeadPayload>>;
  popup: Array<PersistedRecord<LeadPayload>>;
  contacts: Array<PersistedRecord<ContactPayload>>;
};

interface LeadAdapter {
  saveLead(payload: LeadPayload): Promise<void>;
  saveContact(payload: ContactPayload): Promise<void>;
}

const STORE_PATH = process.env.VERCEL
  ? "/tmp/element-leads.json"
  : path.join(process.cwd(), "data", "leads.json");

const defaultStore: LeadStore = {
  newsletter: [],
  guide: [],
  documentation: [],
  popup: [],
  contacts: [],
};

class JsonLeadAdapter implements LeadAdapter {
  async saveLead(payload: LeadPayload) {
    const store = await this.readStore();
    store[payload.source].push(this.withMeta(payload));
    await this.writeStore(store);
  }

  async saveContact(payload: ContactPayload) {
    const store = await this.readStore();
    store.contacts.push(this.withMeta(payload));
    await this.writeStore(store);
  }

  private async ensureStore() {
    await mkdir(path.dirname(STORE_PATH), { recursive: true });

    try {
      await readFile(STORE_PATH, "utf-8");
    } catch {
      await writeFile(STORE_PATH, JSON.stringify(defaultStore, null, 2), "utf-8");
    }
  }

  private async readStore(): Promise<LeadStore> {
    await this.ensureStore();

    try {
      const raw = await readFile(STORE_PATH, "utf-8");
      const parsed = JSON.parse(raw) as Partial<LeadStore>;

      return {
        newsletter: parsed.newsletter ?? [],
        guide: parsed.guide ?? [],
        documentation: parsed.documentation ?? [],
        popup: parsed.popup ?? [],
        contacts: parsed.contacts ?? [],
      };
    } catch {
      return defaultStore;
    }
  }

  private async writeStore(store: LeadStore) {
    await writeFile(STORE_PATH, JSON.stringify(store, null, 2), "utf-8");
  }

  private withMeta<T extends object>(payload: T): PersistedRecord<T> {
    return {
      ...payload,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };
  }
}

type QueryablePool = {
  query: (text: string, values?: unknown[]) => Promise<unknown>;
};

declare global {
  var __elementPgPool: QueryablePool | undefined;
  var __elementPgAdapter: PostgresLeadAdapter | undefined;
}

class PostgresLeadAdapter implements LeadAdapter {
  private initialized = false;

  constructor(private readonly pool: QueryablePool) {}

  static async fromEnv() {
    const connectionString =
      process.env.DATABASE_URL?.trim() || process.env.POSTGRES_URL?.trim();

    if (!connectionString) {
      return null;
    }

    if (globalThis.__elementPgAdapter) {
      return globalThis.__elementPgAdapter;
    }

    if (!globalThis.__elementPgPool) {
      const { Pool } = await import("pg");
      globalThis.__elementPgPool = new Pool({
        connectionString,
        ssl: connectionString.includes("localhost")
          ? false
          : { rejectUnauthorized: false },
      });
    }

    globalThis.__elementPgAdapter = new PostgresLeadAdapter(globalThis.__elementPgPool);

    return globalThis.__elementPgAdapter;
  }

  async saveLead(payload: LeadPayload) {
    await this.ensureSchema();

    await this.pool.query(
      `
        INSERT INTO leads (id, email, source, full_name, phone, created_at)
        VALUES ($1, $2, $3, $4, $5, NOW())
      `,
      [
        crypto.randomUUID(),
        payload.email,
        payload.source,
        payload.fullName ?? null,
        payload.phone ?? null,
      ],
    );
  }

  async saveContact(payload: ContactPayload) {
    await this.ensureSchema();

    await this.pool.query(
      `
        INSERT INTO contacts (id, name, email, phone, message, budget_range, space_type, created_at)
        VALUES ($1, $2, $3, $4, $5, $6, $7, NOW())
      `,
      [
        crypto.randomUUID(),
        payload.name,
        payload.email,
        payload.phone,
        payload.message,
        payload.budgetRange,
        payload.spaceType,
      ],
    );
  }

  private async ensureSchema() {
    if (this.initialized) {
      return;
    }

    await this.pool.query(`
      CREATE TABLE IF NOT EXISTS leads (
        id UUID PRIMARY KEY,
        email TEXT NOT NULL,
        source TEXT NOT NULL,
        full_name TEXT,
        phone TEXT,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `);

    await this.pool.query(`
      CREATE TABLE IF NOT EXISTS contacts (
        id UUID PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT NOT NULL,
        message TEXT NOT NULL,
        budget_range TEXT NOT NULL,
        space_type TEXT NOT NULL,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `);

    this.initialized = true;
  }
}

class ResendAdapter implements LeadAdapter {
  private apiKey: string;
  private to: string;

  constructor(apiKey: string, to: string) {
    this.apiKey = apiKey;
    this.to = to;
  }

  static fromEnv() {
    const apiKey = process.env.RESEND_API_KEY?.trim();
    const to = process.env.CONTACT_EMAIL_TO?.trim();

    if (!apiKey || !to) {
      return null;
    }

    return new ResendAdapter(apiKey, to);
  }

  async saveLead(payload: LeadPayload) {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify({
        from: "ÉLÉMENT Leads <onboarding@resend.dev>",
        to: this.to,
        reply_to: payload.email,
        subject: `[Lead] ${payload.source}`,
        text: `Novi lead: ${payload.email} (${payload.source})`,
      }),
    });

    if (!response.ok) {
      const details = await response.text().catch(() => "resend_error");
      console.error("[resend] lead email failed", details);
      throw new Error(`Resend lead email failed: ${details}`);
    }

    try {
      const confirmationText = [
        "Hvala na prijavi.",
        "Uskoro ćemo vam poslati tražene informacije i sledeće korake.",
        "",
        "ÉLÉMENT (by M·I·B·T)",
      ].join("\n");

      const confirmationResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({
          from: "ÉLÉMENT Studio <onboarding@resend.dev>",
          to: payload.email,
          subject: "Hvala na prijavi - ÉLÉMENT",
          text: confirmationText,
        }),
      });

      if (!confirmationResponse.ok) {
        const details = await confirmationResponse.text().catch(() => "resend_error");
        console.error("[resend] lead confirmation email failed", details);
      }
    } catch (error) {
      console.error("[resend] lead confirmation email error", error);
    }
  }

  async saveContact(payload: ContactPayload) {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify({
        from: "ÉLÉMENT Contact <onboarding@resend.dev>",
        to: this.to,
        reply_to: payload.email,
        subject: `[Kontakt] ${payload.name}`,
        text: [
          `Ime: ${payload.name}`,
          `Email: ${payload.email}`,
          `Telefon: ${payload.phone}`,
          `Tip prostora: ${payload.spaceType}`,
          `Budžet: ${payload.budgetRange}`,
          `Poruka: ${payload.message}`,
        ].join("\n"),
      }),
    });

    if (!response.ok) {
      const details = await response.text().catch(() => "resend_error");
      console.error("[resend] contact email failed", details);
      throw new Error(`Resend contact email failed: ${details}`);
    }
  }
}

class CompositeAdapter implements LeadAdapter {
  constructor(private readonly adapters: LeadAdapter[]) {}

  async saveLead(payload: LeadPayload) {
    const results = await Promise.allSettled(
      this.adapters.map((adapter) => adapter.saveLead(payload)),
    );

    if (results.every((result) => result.status === "rejected")) {
      throw new Error("Nijedan adapter nije uspeo da sačuva lead.");
    }
  }

  async saveContact(payload: ContactPayload) {
    const results = await Promise.allSettled(
      this.adapters.map((adapter) => adapter.saveContact(payload)),
    );

    if (results.every((result) => result.status === "rejected")) {
      throw new Error("Nijedan adapter nije uspeo da sačuva kontakt upit.");
    }
  }
}

const jsonAdapter = new JsonLeadAdapter();
const resendAdapter = ResendAdapter.fromEnv();

async function buildCompositeAdapter() {
  const postgresAdapter = await PostgresLeadAdapter.fromEnv();

  const adapters: LeadAdapter[] = [jsonAdapter];

  if (postgresAdapter) {
    adapters.unshift(postgresAdapter);
  }

  if (resendAdapter) {
    adapters.push(resendAdapter);
  }

  return new CompositeAdapter(adapters);
}

export const leadAdapter: LeadAdapter = {
  async saveLead(payload) {
    const adapter = await buildCompositeAdapter();
    await adapter.saveLead(payload);
  },
  async saveContact(payload) {
    const adapter = await buildCompositeAdapter();
    await adapter.saveContact(payload);
  },
};
