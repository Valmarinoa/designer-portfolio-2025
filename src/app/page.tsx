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
      <p className="text-center text-xs fixed bottom-0 left-1/2 -translate-x-1/2 font-baskervville-italic">
        Coded with love ♥️
      </p>
    </>
  );
}
