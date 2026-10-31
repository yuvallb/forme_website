import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { ventureName } from "@/lib/brand";
import { cn } from "cn";

const links = [
  { href: "#about", label: "הסדנה" },
  { href: "#founders", label: "המייסדים" },
  { href: "#meetings", label: "המפגשים" },
  { href: "#partners", label: "שותפות" },
  { href: "#register", label: "הרשמה" },
  { href: "#contact", label: "יצירת קשר" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-gold/50 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2 sm:px-8">
        <a href="#top" className="shrink-0 rounded-md">
          <Image
            src="workshop-logo.jpg"
            alt={ventureName}
            width={672}
            height={440}
            priority
            className="h-14 w-auto sm:h-[4.75rem]"
          />
        </a>
        <nav className="lg:hidden" aria-label="ניווט ראשי">
          <a
            href="#forms"
            className="text-sm font-semibold text-primary underline decoration-gold underline-offset-4"
          >
            להרשמה ויצירת קשר
          </a>
        </nav>
        <nav className="hidden items-center gap-5 lg:flex" aria-label="ניווט ראשי">
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
            לשותפות
          </a>
        </nav>
      </div>
    </header>
  );
}
