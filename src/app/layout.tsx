import type { Metadata } from "next";
import { Be_Vietnam_Pro, Baskervville } from "next/font/google";
import "./globals.css";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";
import AppProviders from "@/components/providers/AppProviders";

const beVietnamPro = Be_Vietnam_Pro({
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-beVietnamPro",
});

const baskervville = Baskervville({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-baskervville",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://valentinamarino.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Valentina Marino — Design Engineer",
    template: "%s | Valentina Marino",
  },
  description:
    "Amsterdam-based Design Engineer portfolio — client work, playground experiments, and CV.",
  openGraph: {
    title: "Valentina Marino — Design Engineer",
    description:
      "Amsterdam-based Design Engineer portfolio — client work, playground experiments, and CV.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${beVietnamPro.variable} ${baskervville.variable}`}
    >
      <body className="antialiased items-center bg-[#f2f2f2] selection:bg-[#DBFE87]/80 selection:text-black/90">
        <AppProviders>
          <ClientLayoutWrapper />
          {children}
          <p className="text-center text-xs fixed bottom-0 left-1/2 -translate-x-1/2 font-baskervville-italic z-50">
            Coded with love 🩵
          </p>
        </AppProviders>
      </body>
    </html>
  );
}
