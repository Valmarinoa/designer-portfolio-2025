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
            viewport={{ once: true, margin: "-100px" }}
            variants={mediaVariants}
          />

          <div className="self-end text-sm pt-3 hidden md:block">
            <div className="font-baskervville-italic flex">
              <div className="text-4xl">*</div>{" "}
              <span className="pl-3 pt-1">
                Double nationality: Dutch-Colombian <br />
                Amsterdam / EU
              </span>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-3 w-full text-sm">
          <p className="leading-5">
          Born in Colombia, shaped in France, rooted for over a decade in Amsterdam. I studied art and industrial design on a Rare Talents scholarship in the Netherlands, which taught me to move between the poetic and the functional.
          <br /> <br />
My practice follows a natural arc: research → concept → design → code. I move organically between sensory brand research, experience design, physical installations, and frontend development. That range allows me to hold widely diverse perspectives together, and shape work that feels layered and alive.
<br /> <br />
At Signify/Philips, I developed{" "}
            <a
              href="https://www.valmar.studio/value-tuning"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 decoration-black/30 hover:decoration-black/60 transition-colors"
            >
              Value Tuning
            </a>
            : a qualitative methodology that decodes how products communicate brand value through touch, sound, weight, and material - giving design teams evidence to advocate for quality, and naming the gap between what a brand promises and what a person actually feels holding it.
<br /> <br />
Over the past five years I've built digital products as a developer and UI/UX engineer across IoT, retail, and cultural institutions. What I love the most is shaping interfaces that respond to human intention as much as to data; digital environments that carry emotional and cultural meaning, not just information.
<br /> <br />
More recently I've taken an independent path. I partner with teams to reimagine where identity and technology meet. I recently co-founded{" "}
            <a
              href="https://www.carmelacollective.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 decoration-black/30 hover:decoration-black/60 transition-colors"
            >
              Carmela Collective
            </a>{" "}
            (a Latin American cultural platform in Amsterdam) which I’m building from the ground up. In parallel, I’m also leading Qommunity’s web strategy and entire digital presence.
<br /> <br />

            Fluent in Spanish, English, French, Portuguese, and with a solid
            base in Dutch, I thrive in multicultural environments.
           
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
