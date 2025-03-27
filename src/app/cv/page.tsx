"use client";

import { motion } from "framer-motion";
import WorkExperienceItem from "@/components/WorkExperienceItem";
import { workExperiences, educationExperiences } from "@/data/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import InfoPages from "@/components/templates/InfoPages";
import EducationExperienceItem from "@/components/EducationExperienceItem";
import MentionsComponent from "@/components/MentionsComponent";

const CV = () => {
  return (
    <InfoPages title="CV">
      <div className="md:flex md:gap-16 md:justify-between">
        <Tabs defaultValue="professional" className="w-full ">
          <TabsList className="z-50">
            <TabsTrigger value="professional">Professional</TabsTrigger>
            <TabsTrigger value="education">Educational</TabsTrigger>
            <TabsTrigger value="extras" className="flex md:hidden">
              Snapshot
            </TabsTrigger>
          </TabsList>
          <TabsContent value="professional" className="mt-14 md:mt-0">
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
            className="mt-6 md:mt-0 md:flex md:flex-row-reverse flex flex-col-reverse gap-10 "
          >
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
          <TabsContent
            value="extras"
            className="mt-14 md:mt-0 md:flex md:flex-row-reverse flex flex-col-reverse gap-10 "
          >
            <div className="w-full mx-auto relative overflow-y-auto">
              <MentionsComponent />
            </div>
          </TabsContent>
        </Tabs>
        <MentionsComponent />
      </div>
    </InfoPages>
  );
};

export default CV;
