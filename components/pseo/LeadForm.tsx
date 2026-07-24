"use client";

import { useState } from "react";
import { Arrow } from "@/components/ui/Arrow";

/**
 * High-intent lead intake for programmatic pages. Carries a hidden `source`
 * (the service/intent slug) into the enquiry so you can see which landing page
 * generated the lead. Composes a mailto — no backend required.
 */
const CONTACT_EMAIL = "admin@spanexengineering.com";

export function LeadForm({ source }: { source: string }) {
  const [v, setV] = useState({ name: "", email: "", company: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (v.name.trim().length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) {
      setError("Please add your name and a valid email.");
      return;
    }
    const subject = encodeURIComponent(`Enquiry — ${source}`);
    const body = encodeURIComponent(
      `Name: ${v.name}\nCompany: ${v.company}\nEmail: ${v.email}\nSource page: ${source}\n\n${v.message}`,
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border-l-2 border-copper pl-6">
        <span className="eyebrow text-copper">Draft ready</span>
        <p className="measure mt-3 text-[1.05rem] leading-relaxed text-ink">
          Your email client should have opened with the enquiry drafted. If it
          didn&rsquo;t, write to{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="link-wipe text-ink">
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="space-y-6">
      {/* Hidden provenance of the lead */}
      <input type="hidden" name="source" value={source} readOnly />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field id="name" label="Name" value={v.name} onChange={(x) => setV({ ...v, name: x })} autoComplete="name" />
        <Field id="email" label="Email" type="email" value={v.email} onChange={(x) => setV({ ...v, email: x })} autoComplete="email" />
      </div>
      <Field id="company" label="Company" value={v.company} onChange={(x) => setV({ ...v, company: x })} autoComplete="organization" />

      <div>
        <label htmlFor="message" className="eyebrow block">
          What you need
        </label>
        <textarea
          id="message"
          rows={3}
          value={v.message}
          onChange={(e) => setV({ ...v, message: e.target.value })}
          className="mt-3 w-full resize-none border-0 border-b border-rule bg-transparent py-3 font-[family-name:var(--font-body)] text-[1.05rem] leading-relaxed text-ink focus:border-copper focus:outline-none focus-visible:outline-none"
        />
      </div>

      {error && (
        <p role="alert" className="font-[family-name:var(--font-mono)] text-[0.7rem] uppercase tracking-[0.1em] text-copper">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="inline-flex items-center gap-3 bg-ink px-7 py-4 font-[family-name:var(--font-mono)] text-[0.78rem] uppercase tracking-[0.14em] text-paper transition-colors duration-200 hover:bg-copper"
      >
        Request a quote
        <Arrow />
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="eyebrow block">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        className="mt-3 w-full border-0 border-b border-rule bg-transparent py-3 font-[family-name:var(--font-body)] text-[1.05rem] text-ink focus:border-copper focus:outline-none focus-visible:outline-none"
      />
    </div>
  );
}
