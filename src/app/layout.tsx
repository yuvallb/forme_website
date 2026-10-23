import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Frank_Ruhl_Libre, Heebo } from "next/font/google";
import Script from "next/script";
import { DirectionProvider } from "@/components/ui/direction";
import { workshopName } from "@/lib/brand";
import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo",
});

const frank = Frank_Ruhl_Libre({
  subsets: ["hebrew", "latin"],
  weight: ["500", "700"],
  variable: "--font-frank",
});

export const metadata: Metadata = {
  title: workshopName,
  description:
    "מפגשים קטנים לשיחה, הקשבה ויצירה. מקום שקט שבו חוכמה נעשית בידיים.",
  icons: { icon: "/workshop-logo.jpg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${heebo.variable} ${frank.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2P2V41DZSX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2P2V41DZSX');
          `}
        </Script>
        <DirectionProvider direction="rtl">
          <a
            href="#content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:right-3 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
          >
            דילוג לתוכן
          </a>
          {children}
        </DirectionProvider>
      </body>
    </html>
  );
}
