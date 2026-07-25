"use client";

import { useState, type FormEvent } from "react";
import { EMAIL_REGEX, CONTACT_VALIDATION_MESSAGES } from "@/lib/validation";

type SubmissionStatus = "idle" | "submitting" | "success" | "error";

interface ContactFormValues {
  name: string;
  organization: string;
  email: string;
  message: string;
}

interface ContactApiResponse {
  success: boolean;
  error?: string;
}

const INITIAL_VALUES: ContactFormValues = {
  name: "",
  organization: "",
  email: "",
  message: "",
};

const FIELD_CLASSES =
  "mt-2 w-full border border-line bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60";

/**
 * Checks the form client-side before submission; mirrors, but doesn't
 * replace, the server-side checks in app/api/contact/route.ts. Organization
 * is intentionally not required — not every inquiry comes from a company.
 */
function getValidationError(values: ContactFormValues): string | null {
  if (!values.name.trim() || !values.email.trim() || !values.message.trim()) {
    return CONTACT_VALIDATION_MESSAGES.missingFields;
  }
  if (!EMAIL_REGEX.test(values.email.trim())) {
    return CONTACT_VALIDATION_MESSAGES.invalidEmail;
  }
  return null;
}

interface FormFieldProps {
  id: keyof ContactFormValues;
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  disabled: boolean;
  multiline?: boolean;
  required?: boolean;
}

/** A single labeled input or textarea, sharing the form's field styling. */
function FormField({
  id,
  label,
  type = "text",
  value,
  onChange,
  disabled,
  multiline,
  required,
}: FormFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="font-label block text-xs font-bold uppercase tracking-widest text-navy"
      >
        {label}
        {required && (
          <span className="text-accent" aria-hidden="true">
            {" "}
            *
          </span>
        )}
      </label>
      {multiline ? (
        <textarea
          id={id}
          rows={5}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          disabled={disabled}
          required={required}
          className={FIELD_CLASSES}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          disabled={disabled}
          required={required}
          className={FIELD_CLASSES}
        />
      )}
    </div>
  );
}

/**
 * Contact form: collects name, organization (optional), email, and
 * message, then posts to /api/contact. Shows inline loading, success, and
 * error states, and keeps the submitted values in place on error so
 * nothing is lost.
 */
export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  function updateField(key: keyof ContactFormValues) {
    return (value: string) => setValues((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationError = getValidationError(values);
    if (validationError) {
      setStatus("error");
      setErrorMessage(validationError);
      return;
    }

    setStatus("submitting");
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = (await response.json()) as ContactApiResponse;

      if (!response.ok || !result.success) {
        setStatus("error");
        setErrorMessage(result.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-line bg-surface px-6 py-8">
        <p className="font-label text-xs font-bold uppercase tracking-widest text-navy">
          Message sent
        </p>
        <p className="mt-3 text-ink-soft">
          Thanks for reaching out — we&apos;ll get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <p className="text-xs text-ink-soft">
        <span className="text-accent">*</span> Required field
      </p>

      <FormField
        id="name"
        label="Name"
        required
        value={values.name}
        onChange={updateField("name")}
        disabled={status === "submitting"}
      />
      <FormField
        id="organization"
        label="Organization (optional)"
        value={values.organization}
        onChange={updateField("organization")}
        disabled={status === "submitting"}
      />
      <FormField
        id="email"
        label="Email"
        type="email"
        required
        value={values.email}
        onChange={updateField("email")}
        disabled={status === "submitting"}
      />
      <FormField
        id="message"
        label="Message"
        multiline
        required
        value={values.message}
        onChange={updateField("message")}
        disabled={status === "submitting"}
      />

      {status === "error" && errorMessage && (
        <p role="alert" className="text-sm text-accent">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="shadow-raised inline-block bg-gradient-to-br from-accent to-accent-deep px-6 py-3 text-sm font-medium uppercase tracking-wide text-white transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
