"use client";

import { useState, type FormEvent } from "react";
import { CircleCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ventureName } from "@/lib/brand";

const formspreeEndpoint = "https://formspree.io/f/xzeeejeo";

type FieldName = "name" | "email" | "message";

const emptyErrors: Record<FieldName, string> = {
  name: "",
  email: "",
  message: "",
};

export function ContactForm() {
  const [formKey, setFormKey] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [errors, setErrors] = useState(emptyErrors);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const nextErrors = { ...emptyErrors };

    if (name.length < 2) {
      nextErrors.name = "נא לכתוב שם.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "נא למלא כתובת דוא״ל תקינה.";
    }
    if (message.length < 8) {
      nextErrors.message = "ספרו בכמה מילים איך אפשר לשתף פעולה.";
    }

    setErrors(nextErrors);
    if (nextErrors.name || nextErrors.email || nextErrors.message) {
      return;
    }

    data.set("name", name);
    data.set("email", email);
    data.set("message", message);

    setSubmitError("");
    setSubmitting(true);
    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!response.ok) {
        setSubmitError("השליחה לא הצליחה. נסו שוב בעוד רגע.");
        return;
      }
      setSubmitted(true);
    } catch {
      setSubmitError("השליחה לא הצליחה. נסו שוב בעוד רגע.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="flex flex-col items-start gap-4 rounded-2xl bg-accent px-6 py-8 text-accent-foreground"
      >
        <span className="flex size-12 items-center justify-center rounded-full bg-leaf text-primary-foreground">
          <CircleCheck aria-hidden="true" />
        </span>
        <div className="space-y-2">
          <h3 className="text-2xl text-foreground">הפנייה נקלטה</h3>
          <p className="text-base leading-7 text-foreground/80">
            תודה שכתבתם ל{ventureName}. הפנייה נשלחה בדוא״ל אל הסדנה.
          </p>
        </div>
        <Button
          type="button"
          variant="outline"
          className="h-11 rounded-full bg-card px-5"
          onClick={() => {
            setSubmitted(false);
            setSubmitError("");
            setErrors(emptyErrors);
            setFormKey((value) => value + 1);
          }}
        >
          שליחת פנייה נוספת
        </Button>
      </div>
    );
  }

  return (
    <form key={formKey} className="space-y-5" noValidate onSubmit={onSubmit}>
      <div className="space-y-2">
        <Label htmlFor="name">שם</Label>
        <Input
          id="name"
          name="name"
          autoComplete="name"
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? "name-error" : undefined}
          className="h-11 bg-card px-3 text-base"
          required
        />
        {errors.name ? (
          <p id="name-error" className="text-sm text-destructive">
            {errors.name}
          </p>
        ) : null}
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email">דוא״ל</Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="h-11 bg-card px-3 text-base"
            required
          />
          {errors.email ? (
            <p id="email-error" className="text-sm text-destructive">
              {errors.email}
            </p>
          ) : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">טלפון (לא חובה)</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            className="h-11 bg-card px-3 text-base"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">איך אפשר לשתף פעולה</Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          placeholder="למשל: עמותה שמעוניינת לארח את מפגשי הפיילוט, או גוף אקדמי למחקר משותף."
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="min-h-32 bg-card px-3 py-3 text-base"
          required
        />
        {errors.message ? (
          <p id="message-error" className="text-sm text-destructive">
            {errors.message}
          </p>
        ) : null}
      </div>
      <p className="text-base leading-7 text-foreground/80">
        הפנייה נשלחת בדוא״ל אל הסדנה.
      </p>
      {submitError ? (
        <p role="alert" className="text-sm text-destructive">
          {submitError}
        </p>
      ) : null}
      <Button
        type="submit"
        className="h-12 w-full rounded-full px-6 text-base sm:w-auto"
        disabled={submitting}
      >
        {submitting ? "שולחים…" : "שליחת פנייה"}
      </Button>
    </form>
  );
}
