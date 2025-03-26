import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { MaskText } from "./MaskText";
import SocialsComponent from "./SocialsComponent";

const Footer = () => {
  const phrases: React.ReactNode[] = [<>Let`s talk!</>];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1 }}
        className="w-full relative overflow-hidden"
      >
        <div className="w-full h-full absolute z-0 backdrop-blur-[80px]">
          <Image
            src="/media/selected.png"
            height={620}
            width={660}
            alt="Footer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="z-50 relative px-3 pt-4 pb-6 text-[#f2f2f2]">
          <MaskText
            phrases={phrases}
            className=" text-4xl  pb-4"
            startDelay={0.2}
          />

          <motion.div
            className="w-full h-[0.5px] bg-[#f2f2f2] mx-auto mb-4 text-left"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "100%" }}
            transition={{ duration: 2, delay: 1 }}
          />
          <div className="text-left w-full flex flex-col">
            <SocialsComponent
              className="gap-2"
              color="#f2f2f2"
              delay={0}
              hasPhoneNumber
            />
          </div>
          <p className="text-right">©2025</p>
          {/* <p className="text-center fixed bottom-0 left-1/2 -translate-x-1/2 mix-blend-luminosity">
        Coded with love 💚
      </p> */}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Footer;
