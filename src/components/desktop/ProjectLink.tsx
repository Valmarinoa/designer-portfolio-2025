"use client";

import { motion } from "framer-motion";
import { blur } from "@/constants/variants";
import { getChars } from "@/utils/getChars";
import { useSetAtom } from "jotai";
import { selectedProjectAtom, isModalOpenAtom } from "@/store/modalAtom";

interface ProjectLinkProps {
  index: number;
  projectId: string;
  projectTitle: string | undefined;
  projectCategory: string | undefined;
  projectNature: string | undefined;
  setMouseModal: React.Dispatch<
    React.SetStateAction<{ active: boolean; index: number }>
  >;
  selectedLink: { isActive: boolean; index: number };
  onMouseEnter: (index: number) => void;
  onMouseLeave: (index: number) => void;
}

export default function ProjectLink({
  projectId,
  projectTitle,
  projectCategory,
  projectNature,
  index,
  selectedLink,
  setMouseModal,
  onMouseEnter,
  onMouseLeave,
}: ProjectLinkProps) {
  const setSelectedProject = useSetAtom(selectedProjectAtom);
  const setIsModalOpen = useSetAtom(isModalOpenAtom);

  return (
    <div
      key={`l_${index}`}
      className="cursor-pointer"
      onClick={() => {
        setSelectedProject(projectId);
        setIsModalOpen(true);
      }}
    >
      <motion.div
        onMouseEnter={() => {
          onMouseEnter(index);
          setMouseModal({ active: true, index: index });
        }}
        onMouseLeave={() => {
          onMouseLeave(index);
          setMouseModal({ active: false, index: index });
        }}
        variants={blur}
        animate={
          selectedLink.isActive && selectedLink.index !== index
            ? "open"
            : "closed"
        }
        className="font-light text-black/70 hover:text-black/80 transition-all duration-300 ease-in-out items-center"
      >
        {projectCategory && projectNature && (
          <p className="text-md text-black/80 text-right font-baskervville-italic">
            {getChars(projectNature)}
          </p>
        )}

        {projectTitle && (
          <h3 className="leading-[28px] text-4xl ">{getChars(projectTitle)}</h3>
        )}
      </motion.div>
    </div>
  );
}
