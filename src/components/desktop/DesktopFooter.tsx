"use client";

import React from "react";
import { MaskText } from "../MaskText";
import Link from "next/link";
import SocialsComponent from "../SocialsComponent";

const DesktopFooter = () => {
  const phrases: React.ReactNode[] = [
    <>
      Hi! I’m an Amsterdam-based frontend developer <br />
      creating
      <span className="font-baskervville-italic text-[18px] pl-1">
        digital
      </span>{" "}
      and
      <span className="font-baskervville-italic px-1 text-[18px]">
        physical products
      </span>
      <>that feel alive.</>
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
