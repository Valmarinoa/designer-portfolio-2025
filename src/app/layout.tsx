import type { Metadata } from "next";
import { Be_Vietnam_Pro, Baskervville } from "next/font/google";
import "./globals.css";
import { AnimatePresence } from "framer-motion";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";

const beVietnamPro = Be_Vietnam_Pro({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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

export const metadata: Metadata = {
  title: "Dev Portfolio",
  description: "Valentina Marino - Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AnimatePresence mode="wait">
      <html
        lang="en"
        className={`${beVietnamPro.variable} ${baskervville.variable}`}
      >
        <body className="antialiased items-center bg-[#f2f2f2]">
          <ClientLayoutWrapper />
          {children}
        </body>
      </html>
    </AnimatePresence>
  );
}
