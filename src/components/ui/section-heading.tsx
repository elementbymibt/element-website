import { cn } from "@/src/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" ? "text-center" : "text-left", className)}>
      {eyebrow ? (
        <p className="text-brand-gold mb-3 text-xs tracking-[0.35em] uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-brand-burgundy text-3xl leading-tight md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="text-brand-earth mt-4 max-w-3xl">{description}</p>
      ) : null}
    </div>
  );
}
