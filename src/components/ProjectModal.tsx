"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getItemContent } from "@/data/data";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import { selectedProjectAtom, isModalOpenAtom } from "@/store/modalAtom";
import ProjectModalContent from "./ProjectModalContent";
import { mediaVariantsBg } from "@/constants/variants";

const ProjectModal: React.FC = () => {
  const [selectedItem, setSelectedItem] = useAtom(selectedProjectAtom);
  const [isModalOpen, setIsModalOpen] = useAtom(isModalOpenAtom);
  const router = useRouter();

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  if (!isModalOpen || !selectedItem) return null;

  const closeModal = () => {
    setIsModalOpen(false);
    router.push("/", { scroll: false });
  };

  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => {
        setSelectedItem(null);
      }}
    >
      {isModalOpen && selectedItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            delay: 0.1,
            duration: 0.4,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          key="project-modal"
          className="fixed inset-0 h-full backdrop-blur-[80px] z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          {/* Background blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              delay: 0.1,
              duration: 0.4,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="w-screen h-full absolute z-0 backdrop-blur-[80px]"
          >
            {getItemContent(selectedItem)?.type === "video" ? (
              <motion.video
                src={getItemContent(selectedItem)?.src || ""}
                autoPlay
                loop
                muted
                playsInline
                className="object-cover w-full h-full scale-150 "
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "0px" }}
                variants={mediaVariantsBg}
              />
            ) : (
              <motion.img
                src={getItemContent(selectedItem)?.src || ""}
                alt={getItemContent(selectedItem)?.alt || ""}
                className="w-full h-full object-cover scale-150"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "0px" }}
                variants={mediaVariantsBg}
              />
            )}
          </motion.div>
          <div className=" absolute w-full h-full backdrop-blur-[100px] bg-[#f2f2f2]/10 z-10"></div>

          {/* Close Button */}
          <button
            onClick={closeModal}
            className="fixed top-4 right-4 border-[1px] border-black/40 w-12 h-12 flex items-center bg-[#f2f2f2]/30 justify-center rounded-full backdrop-blur-[80px] z-10"
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
          </button>

          {/* Modal Content */}
          <ProjectModalContent selectedItem={selectedItem} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
