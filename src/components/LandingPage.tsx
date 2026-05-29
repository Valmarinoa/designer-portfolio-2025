"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DskModal from "@/components/desktop/DskModal";
import ProjectLink from "@/components/desktop/ProjectLink";
import { projectsDataDsk, getItemContent } from "@/data/data";
import ProjectModal from "./ProjectModal";
import { useProjectModalUrl } from "@/hooks/useProjectModalUrl";
import DesktopFooter from "./desktop/DesktopFooter";
import MobileLandingContainer from "./mobile/MobileLandingContainer";
import StackCarousel from "./StackCarousel";

export default function LandingPage() {
  useProjectModalUrl();

  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });
  const [mouseModal, setMouseModal] = useState({ active: false, index: 0 });

  return (
    <div>
      {/* New mobile menu */}
      <div className="md:hidden">
        <MobileLandingContainer />
        <div className="my-24">
          <StackCarousel />
        </div>
      </div>

      {/* Desktop landing */}
      <div className="hidden md:block">
        <AnimatePresence>
          <div className="w-full h-screen flex flex-col relative">
            <motion.div className="flex flex-wrap gap-8 justify-center items-center w-[80vw] max-w-[950px] m-auto">
              {projectsDataDsk.map((project, index) => (
                <ProjectLink
                  key={project.id}
                  projectId={project.id as string}
                  projectTitle={getItemContent(project.id as string)?.title}
                  projectCategory={
                    getItemContent(project.id as string)?.category
                  }
                  projectNature={getItemContent(project.id as string)?.nature}
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
            <DesktopFooter />
          </div>
        </AnimatePresence>
      </div>

      {/* Jotai Managed Modal */}
      <AnimatePresence>
        <ProjectModal />
      </AnimatePresence>
    </div>
  );
}
