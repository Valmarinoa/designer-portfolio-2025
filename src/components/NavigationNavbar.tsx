"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const NavigationNavbar = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 1 }}
      className="fixed top-0 w-full p-3 z-50 "
    >
      <Link
        href="/"
        className="flex text-black/90 fixed top-3 z-50  bg-blend-multiply mix-blend-multiply"
      >
        <span className="font-semibold">Valentina</span> Marino
      </Link>
      <div className="relative flex justify-between items-center z-50 w-full">
        <div className="gap-6 hidden md:flex mb-auto ml-auto">
          <Link href="/about" className="relative flex items-center gap-2 z-50">
            About
          </Link>
          <Link href={"/cv"}>CV</Link>
        </div>
      </div>
    </motion.div>
  );
};

export default NavigationNavbar;
