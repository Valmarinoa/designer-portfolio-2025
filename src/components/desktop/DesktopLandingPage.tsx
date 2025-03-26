"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import DskModal from "./DskModal";
import ProjectLink from "@/components/desktop/ProjectLink";
import { projectsDataDsk } from "@/data/data";

export default function Home() {
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  const [mouseModal, setMouseModal] = useState({
    active: false,
    index: 0,
  });

  return (
    <div className="w-full h-screen flex flex-col relative">
      <motion.div className="flex flex-wrap gap-6 justify-center items-center w-[80vw] max-w-[800px] m-auto">
        {projectsDataDsk.map((project, index) => (
          <ProjectLink
            key={index}
            project={project}
            index={index}
            setMouseModal={setMouseModal}
            selectedLink={selectedLink}
            onMouseEnter={(index) => {
              setSelectedLink({ isActive: true, index });
              setMouseModal({ active: true, index });
            }}
            onMouseLeave={(index) => {
              setSelectedLink({ isActive: false, index });
              setMouseModal({ active: false, index });
            }}
          />
        ))}
      </motion.div>
      <DskModal
        selectedLink={selectedLink}
        mouseModal={mouseModal}
        projects={projectsDataDsk}
      />
    </div>
  );
}
