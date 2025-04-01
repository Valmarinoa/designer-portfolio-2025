"use client";

import React from "react";
import { MaskText } from "../MaskText";
import Link from "next/link";
import SocialsComponent from "../SocialsComponent";

const DesktopFooter = () => {
  const phrases: React.ReactNode[] = [
    <>
      Hi! I’m a frontend developer creating <br />
      <span className="font-baskervville-italic text-[18px]">digital</span> and
      <span className="font-baskervville-italic px-1 text-[18px]">
        physical products
      </span>
      <>
        that feel alive,
        <br />
        somewhere between
        <span className="font-baskervville-italic pl-1 text-[18px]">
          function
        </span>{" "}
        and
        <span className="font-baskervville-italic pl-1 text-[18px]">
          poetry
        </span>
        .
      </>
    </>,
  ];

  return (
    <div className="fixed left-0 w-full bottom-0 flex justify-between  px-4 pb-8">
      <Link href="about" className="w-[450px]">
        <MaskText phrases={phrases} className={""} startDelay={0.8} />
      </Link>

      <SocialsComponent hasPhoneNumber={false} color="black" delay={1} />

      <p className="self-end">©2025</p>
    </div>
  );
};

export default DesktopFooter;
