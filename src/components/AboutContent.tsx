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
            I’m a frontend developer based in Amsterdam, originally from
            Colombia, with a background in art and industrial design. My work
            sits somewhere between creativity and code—where visual thinking,
            storytelling, and technology come together to shape digital
            experiences that feel thoughtful, human, and intuitive.
            <br /> <br />
            Over the past few years, I’ve worked across web development and
            product design, contributing to projects in industries like IoT,
            retail, and healthcare. I started out in the visual arts, then
            studied industrial design, and eventually found my way into frontend
            development—drawn to the challenge of turning ideas into
            interactive, responsive experiences using modern tech stacks.
            <br /> <br />
            Growing up in Colombia, where magical realism is part of the
            cultural DNA, gave me a strong sense of narrative and imagination.
            Living in France and the Netherlands added new perspectives, and
            being fluent in Spanish, English, French, and Portuguese has helped
            me connect and collaborate across cultures. <br /> <br />
            Right now, I’m focused on finding new ways to combine design, code,
            and storytelling. Whether I’m collaborating with teams or working on
            personal projects, I’m always looking to build digital products that
            feel intentional, engaging, and impactful.  Whether I’m working with
            a team or diving into personal projects, I’m always looking for
            fresh, meaningful ways to bring ideas to life through digital
            experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
