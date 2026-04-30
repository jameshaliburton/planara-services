"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  company: z.string().trim().min(1, "Company is required").max(100),
  message: z.string().trim().min(1, "Message is required").max(1000),
  /** Honeypot — bots fill this; real submissions leave it empty. */
  website: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;
type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(formSchema) });

  const onSubmit = async (data: FormData) => {
    setStatus("submitting");
    setErrorMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json().catch(() => ({}));
      if (res.ok && result.ok) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(
          result.error ||
            "Something went wrong on our end. Please try again, or email hello@planara.com directly.",
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "Couldn't reach our servers. Check your connection and try again, or email hello@planara.com directly.",
      );
    }
  };

  if (status === "success") {
    return (
      <div
        className="rounded-md border border-[var(--color-planara-teal)]/30 bg-[var(--color-planara-teal)]/[0.05] p-8 sm:p-10"
        role="status"
        aria-live="polite"
      >
        <p className="mb-3 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-planara-teal)]">
          <span className="h-px w-8 bg-[var(--color-planara-teal)]" />
          Inquiry received
        </p>
        <h3 className="mb-4 text-balance text-2xl font-light leading-tight tracking-tight text-white sm:text-3xl">
          Thank you. We&apos;ll be in touch.
        </h3>
        <p className="text-base leading-relaxed text-white/70">
          A senior practitioner will review your inquiry and respond within two business days. If your timeline is tighter, write directly to{" "}
          <a
            href="mailto:hello@planara.com"
            className="text-[var(--color-planara-teal)] underline-offset-4 hover:underline"
          >
            hello@planara.com
          </a>
          .
        </p>
      </div>
    );
  }

  const isSubmitting = status === "submitting";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
      aria-label="Contact form"
      noValidate
    >
      {/* Honeypot — visually hidden, bots fill it. */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        {...register("website")}
      />
      <Field
        id="name"
        label="Name"
        register={register("name")}
        error={errors.name?.message}
        disabled={isSubmitting}
      />
      <Field
        id="email"
        label="Email"
        type="email"
        register={register("email")}
        error={errors.email?.message}
        disabled={isSubmitting}
      />
      <Field
        id="company"
        label="Company"
        register={register("company")}
        error={errors.company?.message}
        disabled={isSubmitting}
      />
      <Field
        id="message"
        label="What you're looking to solve"
        textarea
        register={register("message")}
        error={errors.message?.message}
        disabled={isSubmitting}
      />

      {status === "error" && (
        <div
          role="alert"
          className="rounded-md border border-red-400/30 bg-red-400/[0.06] px-4 py-3 text-sm text-red-200"
        >
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[var(--color-planara-teal)] px-6 text-sm font-medium text-[var(--color-planara-dark)] transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {isSubmitting ? "Sending…" : "Submit inquiry"}
        <span aria-hidden>→</span>
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  type = "text",
  textarea,
  register,
  error,
  disabled,
}: {
  id: string;
  label: string;
  type?: string;
  textarea?: boolean;
  register: ReturnType<ReturnType<typeof useForm<FormData>>["register"]>;
  error?: string;
  disabled?: boolean;
}) {
  const inputClasses =
    "w-full rounded-md border border-white/15 bg-white/[0.02] px-4 py-3 text-base text-white placeholder:text-white/30 transition-colors focus:border-[var(--color-planara-teal)] focus:outline-none focus:ring-1 focus:ring-[var(--color-planara-teal)] disabled:opacity-50";
  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="font-mono text-xs uppercase tracking-[0.18em] text-white/55"
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          rows={5}
          className={inputClasses}
          aria-invalid={!!error}
          disabled={disabled}
          {...register}
        />
      ) : (
        <input
          id={id}
          type={type}
          className={inputClasses}
          aria-invalid={!!error}
          disabled={disabled}
          {...register}
        />
      )}
      {error && (
        <p role="alert" className="text-xs text-red-300">
          {error}
        </p>
      )}
    </div>
  );
}
