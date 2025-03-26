"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

import reactLogo from "@/assets/icons/technologies/react.svg";
import nextLogo from "@/assets/icons/technologies/next.svg";
import tailwindLogo from "@/assets/icons/technologies/tailwindcss.svg";
import tsLogo from "@/assets/icons/technologies/ts.svg";
import jsLogo from "@/assets/icons/technologies/js.svg";
import htmlLogo from "@/assets/icons/technologies/html.svg";
import cssLogo from "@/assets/icons/technologies/css.svg";
import gqlLogo from "@/assets/icons/technologies/gql.svg";
import nodeLogo from "@/assets/icons/technologies/node.svg";

const icons = [
  { src: tsLogo, alt: "Typescript" },
  { src: reactLogo, alt: "React" },
  { src: nextLogo, alt: "Next.js" },
  { src: gqlLogo, alt: "GraphQL" },
  { src: nodeLogo, alt: "Node.js" },
  { src: cssLogo, alt: "CSS" },
  { src: jsLogo, alt: "JavaScript" },
  { src: htmlLogo, alt: "HTML" },
  { src: tailwindLogo, alt: "Tailwind" },
];

const StackCarousel = () => {
  return (
    <div className="relative w-full overflow-hidden mb-12 mt-6 grayscale">
      <motion.div
        className="flex space-x-6 w-max"
        animate={{ x: ["0%", "-50%"] }} // Only scroll halfway (because icons are duplicated)
        transition={{
          repeat: Infinity,
          duration: 30, // adjust speed here
          ease: "linear",
        }}
      >
        {[...icons, ...icons].map((icon, i) => (
          <Image
            key={i}
            src={icon.src}
            alt={icon.alt}
            className="h-auto w-12 flex-shrink-0"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default StackCarousel;
