"use client";

import { motion } from "framer-motion";
import WorkExperienceItem from "@/components/WorkExperienceItem";
import { workExperiences, educationExperiences } from "@/data/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import InfoPages from "@/components/templates/InfoPages";
import EducationExperienceItem from "@/components/EducationExperienceItem";

const CV = () => {
  return (
    <InfoPages title="CV">
      <Tabs defaultValue="professional" className="w-full ">
        <TabsList className="z-50">
          <TabsTrigger value="professional">Professional</TabsTrigger>
          <TabsTrigger value="education">Educational</TabsTrigger>
        </TabsList>
        <TabsContent value="professional" className="mt-20 md:mt-0">
          <div className="w-full mx-auto relative overflow-scroll">
            {workExperiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.25 }}
              >
                <WorkExperienceItem {...experience} />
                <motion.div
                  className="w-full bg-black/40 h-[0.5px]"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "100%" }}
                  transition={{ duration: 0.8, delay: index * 0.25 + 0.4 }}
                />
              </motion.div>
            ))}
          </div>
        </TabsContent>
        <TabsContent
          value="education"
          className="mt-12 md:mt-0 md:flex md:flex-row-reverse flex flex-col-reverse gap-10 "
        >
          {/* mentions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className=" bg-[#f2f2f2] flex flex-col w-full md:w-[50%] overflow-y-auto"
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
                      <h3 className="tracking-tight leading-7">
                        Melkweg Awards-DDW
                      </h3>
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
                        Bachelor&apos;s Scholarship
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-2xl mt-16 mb-3">Skills</h4>
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
          </motion.div>
          <div className="w-full mx-auto relative overflow-y-auto">
            {educationExperiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.25 }}
              >
                <EducationExperienceItem {...experience} />
                <motion.div
                  className="w-full bg-black/40 h-[0.5px]"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "100%" }}
                  transition={{ duration: 0.8, delay: index * 0.25 + 0.4 }}
                />
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </InfoPages>
  );
};

export default CV;
