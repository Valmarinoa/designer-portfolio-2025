"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getItemContent } from "@/data/data";
import { useAtom } from "jotai";
import { selectedProjectAtom, isModalOpenAtom } from "@/store/modalAtom";
import ProjectModalContent from "./ProjectModalContent";
import { mediaVariantsBg } from "@/constants/variants";

const ProjectModal: React.FC = () => {
  const [selectedItem, setSelectedItem] = useAtom(selectedProjectAtom);
  const [isModalOpen, setIsModalOpen] = useAtom(isModalOpenAtom);

  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      setShouldRender(true);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  const handleClose = () => {
    setIsModalOpen(false); // Starts the animation
  };

  const handleExitComplete = () => {
    setSelectedItem(null);
    setShouldRender(false); // Fully unmount the modal
  };

  if (!shouldRender || !selectedItem) return null;

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {isModalOpen && (
        <motion.div
          key="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Overlay */}
          <div className="absolute w-full h-full backdrop-blur-[100px] bg-[#f2f2f2]/10 z-10" />

          {/* Background Blur + Media */}
          <motion.div
            className="w-screen h-full absolute z-0 backdrop-blur-[80px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {getItemContent(selectedItem)?.type === "video" ? (
              <motion.video
                src={getItemContent(selectedItem)?.src || ""}
                autoPlay
                loop
                muted
                playsInline
                className="object-cover w-full h-full scale-150"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={mediaVariantsBg}
              />
            ) : (
              <motion.img
                src={getItemContent(selectedItem)?.src || ""}
                alt={getItemContent(selectedItem)?.alt || ""}
                className="w-full h-full object-cover scale-150"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={mediaVariantsBg}
              />
            )}
          </motion.div>

          {/* Close Button */}
          <motion.button
            type="button"
            aria-label="Close project"
            onClick={handleClose}
            className="fixed top-4 right-4 border-[1px] border-black/40 w-12 h-12 flex items-center bg-[#f2f2f2]/30 justify-center rounded-full backdrop-blur-[80px] z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 text-black/60"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </motion.button>

          {/* Modal Content */}
          <motion.div
            className="z-20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.4 }}
          >
            <ProjectModalContent selectedItem={selectedItem} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
