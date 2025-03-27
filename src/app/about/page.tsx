"use client";
import { motion } from "framer-motion";

import { textBlockVariants } from "@/constants/variants";
import AboutContent from "@/components/AboutContent";
import InfoPages from "@/components/templates/InfoPages";

const AboutPage = () => {
  return (
    <InfoPages title="About">
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
