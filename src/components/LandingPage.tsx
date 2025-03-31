"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DskModal from "@/components/desktop/DskModal";
import ProjectLink from "@/components/desktop/ProjectLink";
import { projectsDataDsk, getItemContent } from "@/data/data";
import { useSearchParams } from "next/navigation";
import { useSetAtom } from "jotai";
import { selectedProjectAtom, isModalOpenAtom } from "@/store/modalAtom";
import ProjectModal from "./ProjectModal";
import DesktopFooter from "./desktop/DesktopFooter";
import MobileLandingContainer from "./mobile/MobileLandingContainer";
import StackCarousel from "./StackCarousel";

export default function LandingPage() {
  const searchParams = useSearchParams();
  const setSelectedItem = useSetAtom(selectedProjectAtom);
  const setIsModalOpen = useSetAtom(isModalOpenAtom);

  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });
  const [mouseModal, setMouseModal] = useState({ active: false, index: 0 });

  // Handle modal open on initial load
  useEffect(() => {
    const projectParam = searchParams.get("project");
    if (projectParam) {
      setSelectedItem(projectParam);
      setIsModalOpen(true);
    }
  }, [searchParams, setSelectedItem, setIsModalOpen]);

  // Sync modal with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const projectId = params.get("project");

      if (projectId) {
        setSelectedItem(projectId);
        setIsModalOpen(true);
      } else {
        setIsModalOpen(false);
        setSelectedItem(null);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [setSelectedItem, setIsModalOpen]);

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
                  key={index}
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
