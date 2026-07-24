"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ease, dur } from "@/lib/motion";
import { Arrow } from "@/components/ui/Arrow";

type Field = "name" | "email" | "company" | "volume" | "message";

const VOLUMES = [
  "10-pole pilot",
  "Under 100 poles / month",
  "100–500 poles / month",
  "500+ poles / month",
  "Ongoing landbase / drafting",
];

const CONTACT_EMAIL = "admin@spanexengineering.com";

export function ContactForm() {
  const [values, setValues] = useState<Record<Field, string>>({
    name: "",
    email: "",
    company: "",
    volume: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({});
  const [sent, setSent] = useState(false);

  function validate(field: Field, value: string): string | undefined {
    switch (field) {
      case "name":
        return value.trim().length < 2 ? "Please enter your name." : undefined;
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
          ? undefined
          : "Please enter a valid email.";
      case "company":
        return value.trim().length < 2
          ? "Please enter your company."
          : undefined;
      case "volume":
        return value ? undefined : "Please choose a volume.";
      case "message":
        return value.trim().length < 10
          ? "A sentence or two, so we can scope it."
          : undefined;
    }
  }

  function setField(field: Field, value: string) {
    setValues((v) => ({ ...v, [field]: value }));
    if (touched[field]) {
      setErrors((e) => ({ ...e, [field]: validate(field, value) }));
    }
  }

  function onBlur(field: Field) {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors((e) => ({ ...e, [field]: validate(field, values[field]) }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const nextErrors: Partial<Record<Field, string>> = {};
    (Object.keys(values) as Field[]).forEach((f) => {
      const err = validate(f, values[f]);
      if (err) nextErrors[f] = err;
    });
    setErrors(nextErrors);
    setTouched({
      name: true,
      email: true,
      company: true,
      volume: true,
      message: true,
    });
    if (Object.keys(nextErrors).length > 0) return;

    const subject = encodeURIComponent(
      `Production enquiry — ${values.company}`,
    );
    const body = encodeURIComponent(
      `Name: ${values.name}\nCompany: ${values.company}\nEmail: ${values.email}\nVolume: ${values.volume}\n\n${values.message}`,
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: dur.base, ease: ease.out }}
            className="border-l-2 border-copper pl-8"
          >
            <span className="eyebrow text-copper">Draft ready</span>
            <p className="measure mt-5 text-[length:var(--text-h3)] leading-snug text-ink">
              Your email client should have opened with the enquiry drafted. If
              it didn&rsquo;t, write to{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="link-wipe text-ink">
                {CONTACT_EMAIL}
              </a>{" "}
              directly.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={onSubmit}
            noValidate
            action={`mailto:${CONTACT_EMAIL}`}
            method="post"
            encType="text/plain"
            initial={false}
            className="space-y-8"
          >
            <TextField
              id="name"
              label="Name"
              value={values.name}
              error={touched.name ? errors.name : undefined}
              onChange={(v) => setField("name", v)}
              onBlur={() => onBlur("name")}
              autoComplete="name"
            />
            <TextField
              id="email"
              label="Email"
              type="email"
              value={values.email}
              error={touched.email ? errors.email : undefined}
              onChange={(v) => setField("email", v)}
              onBlur={() => onBlur("email")}
              autoComplete="email"
            />
            <TextField
              id="company"
              label="Company"
              value={values.company}
              error={touched.company ? errors.company : undefined}
              onChange={(v) => setField("company", v)}
              onBlur={() => onBlur("company")}
              autoComplete="organization"
            />

            {/* Volume — select, label above, no placeholder-as-label */}
            <div>
              <label htmlFor="volume" className="eyebrow block">
                Volume
              </label>
              <select
                id="volume"
                name="volume"
                value={values.volume}
                onChange={(e) => setField("volume", e.target.value)}
                onBlur={() => onBlur("volume")}
                aria-invalid={!!(touched.volume && errors.volume)}
                className="mt-3 w-full border-0 border-b border-rule bg-transparent py-3 font-[family-name:var(--font-body)] text-[1.05rem] text-ink focus:border-copper focus:outline-none focus-visible:outline-none"
              >
                <option value="" disabled>
                  Select a volume
                </option>
                {VOLUMES.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
              <FieldError message={touched.volume ? errors.volume : undefined} />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="eyebrow block">
                What you need produced
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={values.message}
                onChange={(e) => setField("message", e.target.value)}
                onBlur={() => onBlur("message")}
                aria-invalid={!!(touched.message && errors.message)}
                className="mt-3 w-full resize-none border-0 border-b border-rule bg-transparent py-3 font-[family-name:var(--font-body)] text-[1.05rem] leading-relaxed text-ink focus:border-copper focus:outline-none focus-visible:outline-none"
              />
              <FieldError
                message={touched.message ? errors.message : undefined}
              />
            </div>

            <button
              type="submit"
              className="group inline-flex items-center gap-3 bg-ink px-7 py-4 font-[family-name:var(--font-mono)] text-[0.78rem] uppercase tracking-[0.14em] text-paper transition-colors duration-200 hover:bg-copper"
            >
              Send enquiry
              <Arrow />
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function TextField({
  id,
  label,
  value,
  error,
  onChange,
  onBlur,
  type = "text",
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  error?: string;
  onChange: (v: string) => void;
  onBlur: () => void;
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
        aria-invalid={!!error}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        className="mt-3 w-full border-0 border-b border-rule bg-transparent py-3 font-[family-name:var(--font-body)] text-[1.05rem] text-ink focus:border-copper focus:outline-none focus-visible:outline-none"
      />
      <FieldError message={error} />
    </div>
  );
}

function FieldError({ message }: { message?: string }) {
  return (
    <AnimatePresence>
      {message && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: dur.fast, ease: ease.out }}
          className="mt-2 font-[family-name:var(--font-mono)] text-[0.7rem] uppercase tracking-[0.1em] text-copper"
          role="alert"
        >
          {message}
        </motion.p>
      )}
    </AnimatePresence>
  );
}
