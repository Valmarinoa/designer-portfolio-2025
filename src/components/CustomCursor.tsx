"use client";

import React, { useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";

const CustomCursor: React.FC = () => {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16); // offset by half of w-8 (32px) to center
      mouseY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full bg-white mix-blend-difference pointer-events-none z-[9999]"
      style={{
        translateX: mouseX,
        translateY: mouseY,
      }}
    />
  );
};

export default CustomCursor;
