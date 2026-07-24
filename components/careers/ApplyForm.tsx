"use client";

import { useState } from "react";
import { Arrow } from "@/components/ui/Arrow";
import { CAREERS_FORMSUBMIT_ENDPOINT, CONTACT_EMAIL } from "@/lib/forms";
import { SITE_URL } from "@/lib/pseo-data";

const MAX_MB = 5;
const ALLOWED = /\.(pdf|docx?|rtf)$/i;

/**
 * Careers application form. Native multipart POST to FormSubmit so the resume
 * is delivered to the inbox as an attachment (FormSubmit's AJAX endpoint does
 * not support files, so this submits the page and redirects to the thank-you
 * page via the hidden _next field).
 */
export function ApplyForm({ roleTitle }: { roleTitle: string }) {
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    const fd = new FormData(e.currentTarget);
    const name = (fd.get("name") ?? "").toString().trim();
    const email = (fd.get("email") ?? "").toString().trim();
    const file = fd.get("attachment") as File | null;

    if (name.length < 2) {
      e.preventDefault();
      return setError("Please enter your full name.");
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      e.preventDefault();
      return setError("Please enter a valid email address.");
    }
    if (!file || file.size === 0) {
      e.preventDefault();
      return setError("Please attach your resume.");
    }
    if (!ALLOWED.test(file.name)) {
      e.preventDefault();
      return setError("Resume must be a PDF or Word document (.pdf, .doc, .docx).");
    }
    if (file.size > MAX_MB * 1024 * 1024) {
      e.preventDefault();
      return setError(`Resume must be under ${MAX_MB} MB.`);
    }

    // Valid — allow the native submission to proceed to FormSubmit.
    setError(null);
    setSubmitting(true);
  }

  return (
    <form
      action={CAREERS_FORMSUBMIT_ENDPOINT}
      method="POST"
      encType="multipart/form-data"
      onSubmit={onSubmit}
      className="space-y-8"
    >
      {/* FormSubmit configuration */}
      <input type="hidden" name="_subject" value={`New application — ${roleTitle}`} />
      <input type="hidden" name="_next" value={`${SITE_URL}/careers/thank-you`} />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="Position" value={roleTitle} />
      {/* Honeypot — bots fill this; humans never see it */}
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <TextField id="name" label="Full name" required autoComplete="name" />
        <TextField id="email" label="Email" type="email" required autoComplete="email" />
        <TextField id="phone" label="Phone" type="tel" autoComplete="tel" />
        <TextField id="location" label="Current location" autoComplete="address-level2" />
      </div>

      <TextField
        id="experience"
        label="Years of AutoCAD / drafting experience"
      />

      <TextField
        id="portfolio"
        label="Portfolio or LinkedIn link (optional)"
        type="url"
        placeholder="https://"
      />

      {/* Resume file */}
      <div>
        <label htmlFor="attachment" className="eyebrow block">
          Resume <span className="text-copper">*</span>
        </label>
        <input
          id="attachment"
          name="attachment"
          type="file"
          required
          accept=".pdf,.doc,.docx,.rtf"
          className="mt-3 block w-full cursor-pointer border border-rule bg-transparent px-4 py-3 font-[family-name:var(--font-body)] text-[0.98rem] text-ink file:mr-4 file:cursor-pointer file:border-0 file:bg-ink file:px-4 file:py-2 file:font-[family-name:var(--font-mono)] file:text-[0.7rem] file:uppercase file:tracking-[0.12em] file:text-paper hover:border-copper file:hover:bg-copper"
        />
        <p className="mt-2 font-[family-name:var(--font-mono)] text-[0.68rem] uppercase tracking-[0.1em] text-slate">
          PDF or Word · under {MAX_MB} MB
        </p>
      </div>

      {/* Cover note */}
      <div>
        <label htmlFor="message" className="eyebrow block">
          Anything you&rsquo;d like us to know (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-3 w-full resize-none border-0 border-b border-rule bg-transparent py-3 font-[family-name:var(--font-body)] text-[1.05rem] leading-relaxed text-ink focus:border-copper focus:outline-none focus-visible:outline-none"
        />
      </div>

      {error && (
        <p
          role="alert"
          className="font-[family-name:var(--font-mono)] text-[0.72rem] uppercase tracking-[0.1em] text-copper"
        >
          {error}
        </p>
      )}

      <div className="flex flex-col gap-4">
        <button
          type="submit"
          disabled={submitting}
          className="group inline-flex w-fit items-center gap-3 bg-ink px-7 py-4 font-[family-name:var(--font-mono)] text-[0.78rem] uppercase tracking-[0.14em] text-paper transition-colors duration-200 hover:bg-copper disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? "Submitting…" : "Submit application"}
          <Arrow />
        </button>
        <p className="measure text-[0.9rem] leading-relaxed text-slate">
          Prefer email? Send your CV to{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="link-wipe text-ink">
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </div>
    </form>
  );
}

function TextField({
  id,
  label,
  type = "text",
  required = false,
  autoComplete,
  placeholder,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="eyebrow block">
        {label} {required && <span className="text-copper">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="mt-3 w-full border-0 border-b border-rule bg-transparent py-3 font-[family-name:var(--font-body)] text-[1.05rem] text-ink placeholder:text-slate/50 focus:border-copper focus:outline-none focus-visible:outline-none"
      />
    </div>
  );
}
