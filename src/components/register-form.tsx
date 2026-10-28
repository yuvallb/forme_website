"use client";

import { useState, type FormEvent } from "react";
import { CircleCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ventureName } from "@/lib/brand";

const formspreeEndpoint = "https://formspree.io/f/xzeeejeo";

type FieldName = "name" | "email";

const emptyErrors: Record<FieldName, string> = {
  name: "",
  email: "",
};

export function RegisterForm() {
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
    const phone = String(data.get("phone") ?? "").trim();
    const nextErrors = { ...emptyErrors };

    if (name.length < 2) {
      nextErrors.name = "נא לכתוב שם.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "נא למלא כתובת דוא״ל תקינה.";
    }

    setErrors(nextErrors);
    if (nextErrors.name || nextErrors.email) {
      return;
    }

    data.set("name", name);
    data.set("email", email);
    data.set("phone", phone);
    data.set("_subject", "הרשמה לפיילוט");

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
          <h3 className="text-2xl text-foreground">ההרשמה נקלטה</h3>
          <p className="text-base leading-7 text-foreground/80">
            תודה שכתבתם ל{ventureName}. ההרשמה נשלחה בדוא״ל אל הסדנה.
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
          הרשמה נוספת
        </Button>
      </div>
    );
  }

  return (
    <form key={formKey} className="space-y-5" noValidate onSubmit={onSubmit}>
      <input type="hidden" name="_subject" value="הרשמה לפיילוט" />
      <div className="space-y-2">
        <Label htmlFor="register-name">שם</Label>
        <Input
          id="register-name"
          name="name"
          autoComplete="name"
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? "register-name-error" : undefined}
          className="h-11 bg-card px-3 text-base"
          required
        />
        {errors.name ? (
          <p id="register-name-error" className="text-sm text-destructive">
            {errors.name}
          </p>
        ) : null}
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="register-email">דוא״ל</Label>
          <Input
            id="register-email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "register-email-error" : undefined}
            className="h-11 bg-card px-3 text-base"
            required
          />
          {errors.email ? (
            <p id="register-email-error" className="text-sm text-destructive">
              {errors.email}
            </p>
          ) : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="register-phone">טלפון (לא חובה)</Label>
          <Input
            id="register-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            className="h-11 bg-card px-3 text-base"
          />
        </div>
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
        {submitting ? "שולחים…" : "שליחת הרשמה"}
      </Button>
    </form>
  );
}
