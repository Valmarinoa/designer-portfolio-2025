import React from "react";
import LanguagesContent from "./LanguagesContent";
import { motion } from "framer-motion";

const MentionsComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className=" bg-[#f2f2f2] flex flex-col w-full md:w-full overflow-y-auto"
    >
      <div>
        <h4 className="text-2xl mb-3 md:mt-8">Mentions</h4>
        <div className="">
          <div className="flex flex-col gap-3 pb-5">
            <div className="flex gap-3">
              <div className="min-h-0 flex flex-col ">
                <p className="flex-nowrap text-[9px] whitespace-nowrap opacity-80">
                  2019
                </p>
                <h3 className="tracking-tight leading-7">Melkweg Awards-DDW</h3>
                <h4 className="font-baskervville-italic text-sm">
                  Nominee to the highest original project
                </h4>
              </div>
            </div>
          </div>{" "}
          <div className="flex flex-col gap-3">
            <div className="flex gap-3">
              <div className="flex flex-col ">
                <p className="flex-nowrap text-[9px] whitespace-nowrap opacity-80">
                  2015
                </p>
                <h3 className="tracking-tight leading-7">Rare Talents</h3>
                <h4 className="font-baskervville-italic text-sm">
                  Bachelor`s Scholarship
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h4 className="text-2xl mt-10 mb-3">Skills</h4>
        <div className="">
          <div className="flex flex-col gap-3 pb-5">
            <div className="flex gap-3">
              <ul className="list-disc ml-5 text-sm space-y-2">
                <li>ReactJS | NextJS</li>
                <li>REST API | CraftCMS | GQL</li>
                <li>Javascript | Typescript</li>
                <li>CSS | TailwindCSS | ChakraUI</li>
                <li>Design & Critical Thinking</li>
                <li>AdobeSuite | Figma | UX-UI</li>
                <li>Hands-on prototyping</li>
                <li>Strong visual design skills</li>
                <li>Versatility & Adaptability</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="">
          <div className="flex flex-col gap-3 pb-5">
            <div className="flex gap-3">
              <LanguagesContent />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MentionsComponent;
