import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Heebo } from "next/font/google";
import Script from "next/script";
import { DirectionProvider } from "@/components/ui/direction";
import { ventureName } from "@/lib/brand";
import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo",
});

const siteUrl = "https://thelaughterisfor.me";

const shareDescription =
  "סדנת סטנדאפ בליווי רגשי למתמודדים אונקולוגיים בשלב השיקום, ובסופה מופע בפני משפחה וחברים. יוצאים לדרך ב-5/1/27 בתל אביב.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: ventureName,
  description: shareDescription,
  icons: {
    icon: [{ url: "icon.png", type: "image/png", sizes: "192x192" }],
    apple: [{ url: "apple-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: siteUrl,
    siteName: ventureName,
    title: `${ventureName} | סדנת סטנדאפ בליווי רגשי`,
    description: shareDescription,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `הלוגו של ${ventureName}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${ventureName} | סדנת סטנדאפ בליווי רגשי`,
    description: shareDescription,
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${heebo.variable} h-full`}
    >
      <body className="min-h-full bg-background text-foreground">
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
