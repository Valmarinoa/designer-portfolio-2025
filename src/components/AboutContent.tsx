import React from "react";
import { MaskText } from "./MaskText";
import SocialsComponent from "./SocialsComponent";
import { motion } from "framer-motion";
import { mediaVariants } from "@/constants/variants";

const AboutContent = () => {
  const languages: React.ReactNode[] = [
    <>
      <span className="flex items-center gap-2">
        <p>English</p>
      </span>
    </>,
    <>
      <span className="flex items-center gap-2">
        <p>Spanish</p>
      </span>
    </>,
    <>
      <span className="flex items-center gap-2">
        <p>French</p>
      </span>
    </>,
    <>
      <span className="flex items-center gap-2">
        <p>Portuguese</p>
      </span>
    </>,
  ];
  return (
    <div className="max-w-[800px] text-black/80 z-50 w-full mt-7 md:mt-0">
      <div className="relative flex flex-col md:flex-row">
        {/* Floating Image */}
        <div className=" w-full max-w-[350px] h-full relative overflow-hidden mr-6 mb-4 rounded-sm">
          <motion.img
            src="/media/yo3.png"
            alt="about me"
            className="w-full h-full object-cover rounded-md"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={mediaVariants}
          />
          {/* <div className="flex gap-6 pt-3  w-full justify-between pr-3  border-b border-black/40 pb-3">
            <p className="font-semibold">Contact & Socials</p>
            <SocialsComponent color="black" hasPhoneNumber={false} />
          </div> */}
          <div className="flex gap-6 pt-3 w-full justify-between pr-3 pb-6">
            <p className="font-semibold">Languages</p>
            <div className="flex flex-col">
              <MaskText
                phrases={languages}
                className={"text-sm"}
                startDelay={1}
              />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-3 w-full">
          <p className="leading-6">
            I`m an Amsterdam-based frontend developer, with roots in Colombia
            and a background in art and industrial design. I bring a creative,
            human-centered approach to building digital experiences that are
            both thoughtful and engaging.
          </p>
          <p className="leading-6">
            Over the past few years, I’ve worked across web development and
            product design—collaborating on projects in industries like IoT,
            retail, and healthcare. My journey began in the visual arts and
            evolved into a love for code and interaction design, where I now
            focus on crafting smooth, intuitive interfaces using modern tech
            stacks.
          </p>
          <p className="leading-6">
            Growing up in a culture where magical realism is part of everyday
            life shaped the way I think about design and storytelling. That
            perspective has been enriched by time spent living in France and the
            Netherlands, and by working across languages and cultures. I`m
            fluent in Spanish, English, French, and Portuguese, which helps me
            connect deeply with people and ideas from all over the world.
          </p>
          <p className="leading-6">
            Today, I’m focused on exploring new ways to blend technology,
            design, and narrative. I’m driven by a desire to create digital
            experiences that are not just functional, but meaningful, immersive,
            and emotionally resonant.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
