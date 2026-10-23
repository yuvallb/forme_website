"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { workshopName } from "@/lib/brand";
import { cn } from "cn";

const links = [
  { href: "#about", label: "אודות" },
  { href: "#offerings", label: "מה בסדנא" },
  { href: "#visit", label: "איך נראה ביקור" },
  { href: "#contact", label: "יצירת קשר" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  function close() {
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-gold/50 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2 sm:px-8">
        <a href="#top" className="shrink-0 rounded-md" onClick={close}>
          <Image
            src="workshop-logo.jpg"
            alt={workshopName}
            width={672}
            height={440}
            priority
            className="h-16 w-auto sm:h-[4.75rem]"
          />
        </a>
        <nav className="hidden items-center gap-7 md:flex" aria-label="ניווט ראשי">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className={cn(buttonVariants({ size: "lg" }), "h-10 rounded-full px-4")}
          >
            לתיאום מפגש
          </a>
        </nav>
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="size-11 rounded-full bg-card md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
          <span className="sr-only">{open ? "סגירת תפריט" : "פתיחת תפריט"}</span>
        </Button>
      </div>
      {open ? (
        <nav
          id="mobile-nav"
          aria-label="ניווט במובייל"
          className="border-t border-border bg-card px-4 py-3 md:hidden"
        >
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={close}
                  className="block rounded-xl px-3 py-3 text-base font-medium hover:bg-muted"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={close}
            className={cn(
              buttonVariants({ size: "lg" }),
              "mt-2 h-12 w-full rounded-full text-base",
            )}
          >
            לתיאום מפגש
          </a>
        </nav>
      ) : null}
    </header>
  );
}
