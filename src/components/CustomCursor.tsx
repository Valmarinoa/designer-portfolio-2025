"use client";

import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring for elegant movement
  const smoothX = useSpring(mouseX, {
    stiffness: 220,
    damping: 16,
    mass: 0.2,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 220,
    damping: 16,
    mass: 0.2,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 2); // offset to center the 8x8 circle
      mouseY.set(e.clientY - 2);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full bg-white mix-blend-difference pointer-events-none z-[9999]"
      style={{
        translateX: smoothX,
        translateY: smoothY,
      }}
    />
  );
};

export default CustomCursor;
