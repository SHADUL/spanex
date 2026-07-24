"use client";

import { useState } from "react";
import { Arrow } from "@/components/ui/Arrow";
import { CONTACT_EMAIL, isFormsConfigured, submitLead } from "@/lib/forms";

/**
 * High-intent lead intake for programmatic pages. Carries a hidden `source`
 * (the service/intent slug) into the enquiry so you can see which landing page
 * generated the lead. Delivers via Web3Forms (server-side email); falls back to
 * a mailto draft until an access key is configured.
 */
export function LeadForm({ source }: { source: string }) {
  const [v, setV] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (v.name.trim().length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) {
      setError("Please add your name and a valid email.");
      return;
    }
    setError(null);

    if (!isFormsConfigured()) {
      const subject = encodeURIComponent(`Enquiry — ${source}`);
      const body = encodeURIComponent(
        `Name: ${v.name}\nCompany: ${v.company}\nEmail: ${v.email}\nSource page: ${source}\n\n${v.message}`,
      );
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      const ok = await submitLead({
        subject: `Enquiry — ${source}`,
        from_name: v.name,
        name: v.name,
        email: v.email,
        company: v.company,
        source_page: source,
        message: v.message,
        botcheck: "",
      });
      setStatus(ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="border-l-2 border-copper pl-6">
        <span className="eyebrow text-copper">Enquiry received</span>
        <p className="measure mt-3 text-[1.05rem] leading-relaxed text-ink">
          Thanks &mdash; your enquiry is on its way to our team. You can also
          reach us at{" "}
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

      {(error || status === "error") && (
        <p role="alert" className="font-[family-name:var(--font-mono)] text-[0.7rem] uppercase tracking-[0.1em] text-copper">
          {error ?? (
            <>
              Something went wrong. Please email{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="normal-case tracking-normal underline">
                {CONTACT_EMAIL}
              </a>
              .
            </>
          )}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-3 bg-ink px-7 py-4 font-[family-name:var(--font-mono)] text-[0.78rem] uppercase tracking-[0.14em] text-paper transition-colors duration-200 hover:bg-copper disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Request a quote"}
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
