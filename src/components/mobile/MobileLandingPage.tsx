"use client";

import React from "react";
import MobileHero from "./MobileHero";
import { MaskText } from "../MaskText";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ProjectList from "../templates/ProjectList";
import Link from "next/link";

const MobileLandingPage = () => {
  const phrases: React.ReactNode[] = [
    "Hi! I’m Valentina.",
    "Creative, versatile, and passion-driven",
    <>
      I develop <span className="font-baskervville-italic">digital</span> and{" "}
      <span className="font-baskervville-italic">physical products</span>
    </>,
    "that make people feel something.",
  ];

  const pageDescriptionClientWork =
    "A showcase of recent client projects I've built and contributed to, collaborating closely with designers, backend, and frontend developers to bring ideas to life.";

  const pageDescriptionPlayground =
    "A space for small experiments with shaders, and interactive visuals that flow and evolve. Organic shapes twist, colors shift, and images featuring artists from Colombia and Brasil come to life.";

  const aboutOption: React.ReactNode[] = [
    <Link
      key="about"
      href="about"
      className="text-[34px] font-normal tracking-tight pb-2"
    >
      About
    </Link>,
  ];
  const cvOption: React.ReactNode[] = [
    <Link
      key="cv"
      href="cv"
      className="text-[34px] font-normal tracking-tight pb-2"
    >
      CV
    </Link>,
  ];
  const selectedWorkOption: React.ReactNode[] = [<>Selected Work</>];
  const playgroundOption: React.ReactNode[] = [<>Playground</>];
  return (
    <>
      <MobileHero />
      <div className="px-3 flex flex-col gap-24">
        {/* Intro text */}
        <MaskText
          phrases={phrases}
          className="text-[34px] leading-[2.15rem] font-light tracking-tight"
        />

        {/* <div className="w-full relative h-48 mx-3">
          <Link
            href="about"
            className="text-[34px] font-normal tracking-tight absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 text-center"
          >
            About
          </Link>
          <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 text-center">
            <svg
              width="210"
              height="93"
              viewBox="0 0 210 93"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M208.059 18.9536C209.364 23.8222 207.835 29.2748 203.802 35.0104C199.771 40.7431 193.279 46.6956 184.801 52.5157C167.848 64.1531 143.045 75.1971 114.411 82.8695C85.7772 90.5419 58.7754 93.379 38.2749 91.7771C28.0223 90.976 19.4243 89.0667 13.067 86.1176C6.70658 83.1669 2.65582 79.2095 1.35129 74.3409C0.0467595 69.4723 1.5761 64.0197 5.60909 58.2841C9.64002 52.5515 16.1315 46.599 24.61 40.7789C41.5629 29.1414 66.3658 18.0975 94.9996 10.4251C123.634 2.75263 150.635 -0.0844632 171.136 1.5174C181.388 2.31852 189.986 4.2278 196.344 7.17695C202.704 10.1276 206.755 14.0851 208.059 18.9536Z"
                stroke="black"
              />
            </svg>
          </div>

          <Link
            href="cv"
            className="text-[34px] font-normal tracking-tight absolute top-1/4 right-1/4 translate-x-1/2 -translate-y-1/2 text-center"
          >
            CV
          </Link>
          <div className="absolute top-1/4 right-1/4 translate-x-1/2 -translate-y-1/2 text-center">
            <svg
              width="168"
              height="112"
              viewBox="0 0 168 112"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M164.98 103.201C162.777 107.018 158.456 109.451 152.392 110.508C146.332 111.564 138.603 111.23 129.717 109.578C111.951 106.275 89.6712 97.7239 67.1036 84.6944C44.536 71.665 25.9908 56.6457 14.2469 42.911C8.37343 36.0418 4.21981 29.5156 2.10437 23.739C-0.0123001 17.959 -0.06549 13.0008 2.13784 9.18448C4.34117 5.3682 8.66172 2.93515 14.7256 1.87826C20.7861 0.821978 28.5148 1.15598 37.4004 2.80798C55.167 6.11111 77.4467 14.6621 100.014 27.6915C122.582 40.7209 141.127 55.7402 152.871 69.475C158.744 76.3441 162.898 82.8704 165.014 88.647C167.13 94.427 167.183 99.3852 164.98 103.201Z"
                stroke="black"
              />
            </svg>
          </div>
        </div> */}

        <Accordion type="multiple" className="mb-0">
          <AccordionItem value="item-1" className="no-underline pb-4">
            <MaskText phrases={aboutOption} className={""} />
          </AccordionItem>
          <AccordionItem value="item-4" className="no-underline py-4">
            <MaskText phrases={cvOption} className={""} />
          </AccordionItem>
          <AccordionItem
            value="item-2"
            defaultValue={["item-2"]}
            className="no-underline "
          >
            <AccordionTrigger className="no-underline text-[34px] font-normal tracking-tight">
              <MaskText phrases={selectedWorkOption} className={""} />
            </AccordionTrigger>
            <AccordionContent>
              <ProjectList
                filter="client work"
                pageDescription={pageDescriptionClientWork}
              />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="no-underline ">
            <AccordionTrigger className="no-underline text-[34px] font-normal tracking-tight">
              <MaskText phrases={playgroundOption} className={""} />
            </AccordionTrigger>
            <AccordionContent>
              <ProjectList
                filter="playground"
                pageDescription={pageDescriptionPlayground}
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default MobileLandingPage;
