import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

type LeadSource = "newsletter" | "guide" | "documentation";

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
  contacts: Array<PersistedRecord<ContactPayload>>;
};

interface LeadAdapter {
  saveLead(payload: LeadPayload): Promise<void>;
  saveContact(payload: ContactPayload): Promise<void>;
}

const STORE_PATH = path.join(process.cwd(), "data", "leads.json");

const defaultStore: LeadStore = {
  newsletter: [],
  guide: [],
  documentation: [],
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

class ResendAdapter implements LeadAdapter {
  private apiKey = process.env.RESEND_API_KEY;
  private to = process.env.CONTACT_EMAIL_TO;

  private isReady() {
    return Boolean(this.apiKey && this.to);
  }

  async saveLead(payload: LeadPayload) {
    if (!this.isReady()) {
      return;
    }

    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify({
        from: "ÉLÉMENT Leads <onboarding@resend.dev>",
        to: this.to,
        subject: `[Lead] ${payload.source}`,
        text: `Novi lead: ${payload.email} (${payload.source})`,
      }),
    });
  }

  async saveContact(payload: ContactPayload) {
    if (!this.isReady()) {
      return;
    }

    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify({
        from: "ÉLÉMENT Contact <onboarding@resend.dev>",
        to: this.to,
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
  }
}

class CompositeAdapter implements LeadAdapter {
  constructor(private readonly adapters: LeadAdapter[]) {}

  async saveLead(payload: LeadPayload) {
    await Promise.allSettled(this.adapters.map((adapter) => adapter.saveLead(payload)));
  }

  async saveContact(payload: ContactPayload) {
    await Promise.allSettled(
      this.adapters.map((adapter) => adapter.saveContact(payload)),
    );
  }
}

const jsonAdapter = new JsonLeadAdapter();
const resendAdapter = new ResendAdapter();

export const leadAdapter: LeadAdapter = new CompositeAdapter([
  jsonAdapter,
  resendAdapter,
]);
