"use client";

import React from "react";
import { MaskText } from "../MaskText";
import Link from "next/link";
import SocialsComponent from "../SocialsComponent";
// import { useTranslation } from "@/hooks/useTranslation";

const DesktopFooter = () => {

  const phrases: React.ReactNode[] = [
    <>
      Hi! I’m a Frontend Developer who loves to build <br />
      <span className="font-baskervville-italic text-[18px] px-1">
        interfaces & digital products
      </span>
      that feel alive.
    </>,
  ];

  return (
    <div className="fixed left-0 w-full bottom-0 flex justify-between  px-4 pb-4">
      <Link href="about" className="w-[450px]">
        <MaskText phrases={phrases} className={""} startDelay={0.8} />
      </Link>

      <SocialsComponent hasPhoneNumber={false} color="black" delay={1} />

      <div className="self-end text-base">
        <span className="font-baskervville-italic">EU / LATAM </span>based.
      </div>
    </div>
  );
};

export default DesktopFooter;
