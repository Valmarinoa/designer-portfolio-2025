import React from "react";
import { motion } from "framer-motion";
import { mediaVariants } from "@/constants/variants";

const AboutContent = () => {
  return (
    <div className="max-w-[880px] text-black/80 z-50 w-full mt-7 md:mt-0">
      <div className="relative flex flex-col md:flex-row ">
        {/* Floating Image */}
        <div className=" w-full max-w-[370px] h-full relative overflow-hidden md:mr-6 mb-4 rounded-sm ">
          <motion.img
            src="/media/yo3.png"
            alt="about me"
            className="w-full h-full object-cover rounded-md"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={mediaVariants}
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-3 w-full text-sm">
          <p className="leading-5">
            I`m a frontend developer from Colombia with a background in art and
            industrial design. My work lives at the intersection of creativity
            and code—where visual thinking, storytelling, and technology come
            together to craft digital experiences that feel intuitive, human,
            and thoughtfully designed.
            <br /> With experience spanning IoT, retail, and healthcare, I’ve
            contributed to everything from responsive interfaces to interactive
            platforms. I`m skilled in modern frontend tools like React, Next.js,
            TypeScript, CSS/Tailwind, and Framer Motion for styling and
            animation.
            <br /> Fluent in Spanish, English, French, and Portuguese, I thrive
            in remote, multicultural environments. I`m currently seeking
            opportunities where I can push the boundaries of frontend
            development and help build products that are both innovative and
            deeply human. <br />
            I`m drawn to the challenge of turning ideas into responsive,
            engaging digital experiences. My creative roots give me a strong
            visual and narrative sensibility, which I bring into every
            project—whether I’m collaborating with a team or building something
            on my own. Ultimately, I aim to create work that feels intentional,
            immersive, and impactful.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
