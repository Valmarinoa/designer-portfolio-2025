"use client";

import { motion } from "framer-motion";
import { projectsDataDsk } from "@/data/data";
import Image from "next/image";
import { useSetAtom } from "jotai";
import { selectedProjectAtom, isModalOpenAtom } from "@/store/modalAtom";

interface ProjectListProps {
  pageDescription?: string;
  filter: "client work" | "playground";
}

const ProjectList: React.FC<ProjectListProps> = ({
  filter,
  pageDescription,
}) => {
  const setSelectedProject = useSetAtom(selectedProjectAtom);
  const setIsModalOpen = useSetAtom(isModalOpenAtom);

  return (
    <motion.div
      className="relative z-0"
      initial={{ opacity: 0, backgroundColor: "transparent" }}
      animate={{ opacity: 1, backgroundColor: "#f2f2f2" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-gradient-to-b from-[#f2f2f2]/90 from-50% to-transparent backdrop-blur-lg">
        <div className="pb-4 text-black/80 text-sm font-light">
          {filter === "playground" && (
            <div className="text-[11px] pb-4">
              **Visit from desktop screen, for better user experience!
            </div>
          )}
          {pageDescription}
        </div>
      </div>

      <div className="divide-y-[1px] divide-black py-6 flex flex-col gap-4">
        <motion.div
          className="flex flex-col gap-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.5, delayChildren: 0.5 },
            },
          }}
        >
          {projectsDataDsk
            .filter((project) => project.nature === filter)
            .map((project, index) => (
              <motion.div className="flex justify-between" key={index}>
                <div className="overflow-y-scroll h-[100px] relative">
                  <div className="sticky top-0 left-0 pb-1">
                    <h2 className="text-xl">{project.title}</h2>
                    <p className="text-sm font-baskervville-italic">
                      {project.category}
                    </p>
                  </div>

                  <div className="flex gap-2 w-full">
                    <button
                      className="px-4 py-1 mt-1 font-medium text-sm rounded-full border-[1px] border-black/40"
                      onClick={() => {
                        setSelectedProject(project.id as string);
                        setIsModalOpen(true);
                      }}
                    >
                      + Info
                    </button>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-1 mt-1 font-medium text-sm rounded-full border-[1px] border-black/40"
                    >
                      Visit
                    </a>
                  </div>
                </div>

                <div className="md:w-[42vw] w-[38vw] min-w-40 h-24 md:h-44 relative rounded-sm overflow-hidden">
                  {project.type === "video" ? (
                    <video
                      src={project.src!}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <Image
                      src={project.src!}
                      height={120}
                      width={160}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectList;
