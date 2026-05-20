import { ProjectItem } from "@/types/types";
import { useRef, useEffect } from "react";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";

interface DskModalProps {
  mouseModal: { active: boolean; index: number };
  projects: ProjectItem[];
  selectedLink: {
    isActive: boolean;
    index: number;
  };
}

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-1200%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-120%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-120%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

function DskModal({ mouseModal, projects }: DskModalProps) {
  const { active, index } = mouseModal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  useEffect(() => {
    const xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
    const xMoveCursor = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    const yMoveCursor = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });
    const xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    const yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      xMoveContainer(clientX);
      yMoveContainer(clientY);
      xMoveCursor(clientX);
      yMoveCursor(clientY);
      xMoveCursorLabel(clientX);
      yMoveCursorLabel(clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className={styles.modalContainer}
        // className="h-28 w-38 flex items-center justify-center absolute overflow-hidden pointer-events-none"
        // modalContainer
      >
        <div
          style={{ top: index * -100 + "%" }}
          className={styles.modalSlider}
        >
          {projects.map((project, index) => (
            <div key={`modal_${index}`} className={styles.modal}>
              {project.videoSrc || project.type === "video" ? (
                <video
                  src={project.videoSrc || project.src || undefined}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="object-cover w-full h-full"
                />
              ) : (
                <Image
                  src={project.src || ""}
                  height={120}
                  width={160}
                  alt={project.alt || project.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        ref={cursor}
        className={styles.cursor}
        // className="w-20 h-20 rounded-full bg-transparent text-white absolute z-20 flex items-center justify-center text-sm font-light pointer-events-none"
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      ></motion.div>
    </>
  );
}

export default DskModal;
