import React from "react";
import { motion } from "framer-motion";
import { mediaVariants } from "@/constants/variants";

const AboutContent = () => {
  return (
    <div className="max-w-[880px] text-black/80 z-50 w-full mt-7 md:mt-0">
      <div className="relative flex flex-col md:flex-row ">
        {/* Floating Image */}
        <div className=" w-full max-w-[370px] md:w-96 h-full relative overflow-hidden md:mr-6 mb-4 rounded-sm">
          <motion.img
            src="/media/yo4.png"
            alt="about me"
            className="w-full h-full object-cover rounded-sm"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={mediaVariants}
          />

          <div className="self-end text-sm pt-3 hidden md:block">
            <div className="font-baskervville-italic flex">
              <div className="text-4xl">*</div>{" "}
              <span className="pl-3 pt-1">
                Double nationality: Dutch-Colombian <br />
                EU / LATAM based.
              </span>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-3 w-full text-sm">
          <p className="leading-5">
            Hi! I’m a frontend developer from Colombia, now based in Amsterdam,
            with a background in art and industrial design. I love working at
            the intersection of creativity and code — combining visual thinking,
            storytelling, and tech — to build digital experiences that feel
            intuitive, human, and thoughtfully crafted.
            <br /> <br />
            With experience spanning IoT, retail, and healthcare, I’ve
            contributed to everything from sleek, responsive interfaces to
            interactive platforms. I’m skilled in modern frontend tools like
            React, Next.js, TypeScript, CSS/Tailwind, and Framer Motion for
            animations. <br />
            Beyond just writing code, my approach is to ensure that user
            research, design, and development all align seamlessly. That’s why
            I’ve been involved in the full product journey: starting with user
            research, shaping ideas through product design, and now focusing on
            implementation as a developer. <br /> That end-to-end perspective
            informs how I think, collaborate, and build.
            <br /> <br />
            Fluent in Spanish, English, French, Portuguese, and with a solid
            base in Dutch, I thrive in multicultural environments.
            <br /> <br />
            I`m drawn to the challenge of turning ideas into responsive,
            engaging digital experiences. My creative roots give me a strong
            aesthetic and narrative sensibility, which I bring into every
            project. Whether I’m teaming up with others or building something on
            my own, I care about creating digital experiences that feel
            intentional, that tell a story and actually connect with people.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
