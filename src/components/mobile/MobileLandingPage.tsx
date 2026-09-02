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
    "Hi! I’m an",
    " Amsterdam-based Desgin Engineer and Experience Strategist",
    <>
      creating{" "}
      <span className="font-baskervville-italic text-[39px]">digital</span> and{" "}
      <span className="font-baskervville-italic text-[39px] pr-2">
        physical products
      </span>
      that feel alive.
    </>,
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
          className="text-[34px] leading-[2.8rem] font-light tracking-tight"
        />

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
