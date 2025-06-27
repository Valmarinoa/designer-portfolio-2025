"use client";

import React from "react";
import { motion } from "framer-motion";
import { getItemContent } from "@/data/data";
import { mediaVariants } from "@/constants/variants";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

interface Props {
  selectedItem: string;
}

const ProjectModalContent: React.FC<Props> = ({ selectedItem }) => {
  const project = getItemContent(selectedItem);

  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        delay: 0.6,
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="bg-gradient-to-b from-transparent from-60% to-[#f2f2f2]/40 to-90% rounded-lg md:backdrop-blur-lg z-10 md:shadow-lg h-fit max-h-[500px] md:w-full max-w-[460px] md:max-h-[600px] items-center m-auto overflow-hidden shadow-xl"
    >
      <motion.div
        layoutId={`modal-${selectedItem}`}
        initial={{ borderRadius: "100px" }}
        animate={{ borderRadius: "12px", transition: { duration: 0.3 } }}
      >
        {project.type === "video" ? (
          <motion.video
            src={project.src || ""}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[260px] rounded-t-sm shadow-md object-cover"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={mediaVariants}
          />
        ) : (
          <motion.img
            src={project.src || ""}
            alt={project.alt || ""}
            className="w-full h-[260px] rounded-t-sm shadow-md object-cover"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={mediaVariants}
          />
        )}

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              opacity: 1,
              transition: {
                when: "beforeChildren",
                staggerChildren: 0.1,
                ease: "easeInOut",
              },
            },
            hidden: { opacity: 0 },
          }}
          className="m-0 my-4 flex flex-col gap-1 px-4 relative"
        >
          <div className="flex items-start justify-between text-black/70">
            <motion.div
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4 },
                },
                hidden: { opacity: 0, y: 10 },
              }}
            >
              <h3 className="md:text-4xl text-2xl leading-[28px] md:font-light">
                {project.title}
              </h3>
              <div className="flex gap-1 font-baskervville-italic">
                <h5 className="font-light capitalize">
                  <i>{project.nature}</i>
                </h5>
                <p className="font-light">-</p>
                <h5 className="font-light capitalize">
                  <i>{project.category}</i>
                </h5>
              </div>
            </motion.div>

            {selectedItem === "cumbre" ? (
              <Popover>
                <PopoverTrigger asChild>
                  <button className="px-10 py-2 mt-1 font-medium border border-black/40 text-xs rounded-full bg-[#f2f2f2]/20 text-black/50">
                    Visit
                  </button>
                </PopoverTrigger>
                <PopoverContent className="text-xs text-center backdrop-blur-md bg-white/40 border-none rounded-lg p-3 w-fit">
                  Currently optimising this project, it'll be back soon!
                </PopoverContent>
              </Popover>
            ) : (
              <motion.a
                href={project.link}
                target="_blank"
                className="px-10 py-2 mt-1 font-medium border border-black/40 text-xs rounded-full bg-[#f2f2f2]/20 hover:bg-[#f2f2f2]/30 transition-all hover:shadow-md duration-300"
              >
                Visit
              </motion.a>
            )}
          </div>

          <motion.div
            className="w-32 bg-black/40 h-[0.5px] mb-4 mt-2"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "20%" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          <motion.div
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, duration: 0.4 },
              },
              hidden: { opacity: 0, y: 2 },
            }}
            className="text-sm text-black/70 md:max-h-full max-h-[110px] overflow-y-auto pb-6 md:pb-6"
          >
            {project.description}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModalContent;
