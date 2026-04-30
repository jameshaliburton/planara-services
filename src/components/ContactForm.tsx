"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  company: z.string().trim().min(1, "Company is required").max(100),
  message: z.string().trim().min(1, "Message is required").max(1000),
  /** Honeypot — bots fill this; real submissions leave it empty. */
  website: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(formSchema) });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (res.ok && result.ok) {
        toast.success("Inquiry received. We'll be in touch.");
        reset();
      } else {
        toast.error(result.error || "Failed to send. Please try again.");
      }
    } catch {
      toast.error("Failed to send. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
      aria-label="Contact form"
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
        <p role="alert" className="text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
