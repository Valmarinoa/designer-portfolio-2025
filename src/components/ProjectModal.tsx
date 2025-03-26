"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { mediaVariantsBg, mediaVariants } from "@/constants/variants"; // ✅ Re-added mediaVariants
import { getItemContent } from "@/data/data";
import { useAtom } from "jotai";
import { selectedProjectAtom, isModalOpenAtom } from "@/store/modalAtom";

const ProjectModal: React.FC = () => {
  const [selectedItem, setSelectedItem] = useAtom(selectedProjectAtom);
  const [isModalOpen, setIsModalOpen] = useAtom(isModalOpenAtom);

  if (!isModalOpen || !selectedItem) return null;

  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => {
        setSelectedItem(null);
      }}
    >
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
          className="fixed inset-0 h-full backdrop-blur-[80px] z-50 flex items-center justify-center p-4 "
        >
          {/* Background blur */}
          <div className="w-screen h-full absolute z-0 backdrop-blur-[80px]">
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
                viewport={{ once: false, margin: "-100px" }}
                variants={mediaVariantsBg} // ✅ Background variant animation
              />
            ) : (
              <motion.img
                src={getItemContent(selectedItem)?.src || ""}
                alt={getItemContent(selectedItem)?.alt || ""}
                className="w-full h-full object-cover scale-150"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-100px" }}
                variants={mediaVariantsBg} // ✅ Background variant animation
              />
            )}
          </div>
          <div className=" absolute w-full h-full backdrop-blur-[100px] bg-[#f2f2f2]/10 z-10"></div>

          {/* Close Button */}
          <button
            onClick={() => {
              setIsModalOpen(false);
              // setSelectedItem(null);
            }}
            className="fixed top-4 right-4 border border-black/20 w-12 h-12 flex items-center bg-[#f2f2f2]/30 justify-center rounded-full backdrop-blur-[80px] z-10"
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
              className="w-6 h-6 text-black"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              delay: 0.6,
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="bg-gradient-to-b from-transparent from-60% to-[#f2f2f2]/40 to-90% rounded-lg md:backdrop-blur-lg z-10 md:shadow-lg max-h-[530px] h-fit md:w-full max-w-[460px] md:max-h-[600px] items-center m-auto overflow-hidden"
          >
            <motion.div
              layoutId={`modal-${selectedItem}`}
              className=""
              initial={{ borderRadius: "100px" }}
              animate={{ borderRadius: "12px", transition: { duration: 0.3 } }}
            >
              {/* Media Block */}
              {getItemContent(selectedItem)?.type === "video" ? (
                <motion.video
                  src={getItemContent(selectedItem)?.src || ""}
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
                  src={getItemContent(selectedItem)?.src || ""}
                  alt={getItemContent(selectedItem)?.alt || ""}
                  className="w-full  h-[260px] rounded-t-sm shadow-md object-cover"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, margin: "-100px" }}
                  variants={mediaVariants}
                />
              )}
              {/* Content Block */}
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
                    <h3 className="md:text-4xl text-2xl leading-[28px]  md:font-light">
                      {getItemContent(selectedItem)?.title || ""}
                    </h3>
                    <div className="flex gap-1 font-baskervville-italic">
                      <h5 className=" font-light capitalize">
                        <i>{getItemContent(selectedItem)?.nature || ""}</i>
                      </h5>
                      <p className=" font-light">-</p>
                      <h5 className=" font-light capitalize">
                        <i>{getItemContent(selectedItem)?.category || ""}</i>
                      </h5>
                    </div>
                  </motion.div>

                  {/* Visit Button */}
                  <motion.a
                    href={getItemContent(selectedItem)?.link}
                    target="_blank"
                    className="px-10 py-2 mt-1 font-medium border border-black/40 text-xs rounded-full bg-[#f2f2f2]/20  hover:bg-[#f2f2f2]/30 transition-all hover:shadow-md duration-300"
                  >
                    Visit
                  </motion.a>
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
                  className="text-sm text-black/70 max-h-[150px] md:max-h-full overflow-y-auto pb-6 md:pb-6"
                >
                  {getItemContent(selectedItem)?.description || ""}
                </motion.div>
              </motion.div>{" "}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
