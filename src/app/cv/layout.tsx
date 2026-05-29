import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV",
  description:
    "Professional experience and education — Valentina Marino, frontend developer.",
};

export default function CVLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
