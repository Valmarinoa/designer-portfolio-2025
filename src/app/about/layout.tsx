import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Valentina Marino — frontend developer with a background in art and industrial design, based in Amsterdam.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
