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
});

type FormData = z.infer<typeof formSchema>;

const ACCESS_KEY = "4b6c594e-4e9e-4eef-a568-05d5fc1a06af";

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
      const formData = new FormData();
      formData.append("access_key", ACCESS_KEY);
      formData.append("subject", "New consultation request — services.planara.com");
      formData.append("from_name", data.name);
      formData.append("replyto", data.email);
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("company", data.company);
      formData.append("message", data.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (result.success) {
        toast.success("Inquiry received. We'll be in touch.");
        reset();
      } else {
        toast.error("Failed to send. Please try again.");
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
