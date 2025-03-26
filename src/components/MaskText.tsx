"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type MaskTextProps = {
  phrases: string[] | React.ReactNode[];
  className: string;
  startDelay?: number;
};

export function MaskText({ phrases, className, startDelay }: MaskTextProps) {
  const animation = {
    initial: { y: "100%" },
    enter: (i: number) => ({
      y: "0",
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: startDelay && startDelay + 0.075 * i,
      },
    }),
  };

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={className}>
      {phrases.map((phrase, index) => (
        <div key={index} className="overflow-hidden">
          <motion.div
            custom={index}
            variants={animation}
            initial="initial"
            animate={inView ? "enter" : ""}
          >
            {phrase}
          </motion.div>
        </div>
      ))}
    </div>
  );
}
