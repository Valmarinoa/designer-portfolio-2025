"use client";
import { motion } from "framer-motion";

import { textBlockVariants } from "@/constants/variants";
import AboutContent from "@/components/AboutContent";

import InfoPages from "@/components/templates/InfoPages";

const AboutPage = () => {
  return (
    <InfoPages title="About">
      {/* SUN ANIMATION */}
      {/* <div className="w-full h-full fixed z-10 top-0 left-0">
        <Suns />
      </div> */}

      {/* About Content */}
      <motion.div
        variants={textBlockVariants}
        initial="hidden"
        animate="visible"
        className="flex gap-10 justify-center z-50 w-full max-w-[880px] m-auto"
      >
        <AboutContent />
      </motion.div>
    </InfoPages>
  );
};

export default AboutPage;
