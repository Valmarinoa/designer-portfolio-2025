import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { projectsData } from "@/data/data"; // Adjust the path to your data file
import Image from "next/image";

export const ProjectImageCarousel = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  // Convert projectsData to an array of projects
  const projects = Object.entries(projectsData).map(([_, project]) => project);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <div className="w-full h-full py-8 flex relative items-center my-auto self-center">
      <div className="w-44 bg-gradient-to-r from-[#f2f2f2] from-20% to-transparent to-60% h-[250px] absolute z-50" />

      <div className="overflow-hidden relative">
        <motion.div
          ref={carousel}
          className="flex gap-4"
          initial={{ x: 0 }}
          animate={{ x: [0, -width] }}
          transition={{
            duration: projects.length * 8,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{ display: "flex", willChange: "transform" }}
        >
          {/* Duplicate the projects array to create seamless looping */}
          {[...projects, ...projects].map((project, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-52 h-[150px] relative align-baseline"
            >
              {project.type === "video" ? (
                <video
                  src={project.src}
                  className="object-contain w-full h-full"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <Image
                  src={project.src}
                  alt={project.alt || project.title}
                  layout="fill"
                  className=" object-contain"
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="w-44 bg-gradient-to-l right-0 from-[#f2f2f2] from-20% to-transparent to-60% h-[250px] absolute z-50" />
    </div>
  );
};

export default ProjectImageCarousel;
