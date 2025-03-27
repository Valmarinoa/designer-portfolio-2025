"use client";

import Footer from "@/components/Footer";
import LandingPage from "@/components/LandingPage";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Suspense fallback={null}>
        <LandingPage />
      </Suspense>
      <div className="md:hidden">
        <Footer />
      </div>
    </>
  );
}
