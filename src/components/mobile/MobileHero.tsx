import { useRef, useEffect } from "react";
import { motion, useInView, useTransform, useScroll } from "framer-motion";
import { getCharsDelayed } from "@/utils/getChars";
import NavigationNavbar from "../NavigationNavbar";
import { useAtom } from "jotai";
import { isHeroInViewAtom } from "@/store/modalAtom"; // adjust path if needed

const MobileHero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLDivElement>(null); // ✅ Track Hero section
  const isInView = useInView(heroRef);
  const [, setHeroInView] = useAtom(isHeroInViewAtom);

  useEffect(() => {
    setHeroInView(isInView);
  }, [isInView, setHeroInView]);

  // Track Scroll Position
  const { scrollYProgress } = useScroll({
    target: heroRef, // ✅ Track the hero section visibility
    offset: ["start end", "end start"],
  });

  // Parallax Effect
  const textY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const subtitlesY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const blob1Y = useTransform(scrollYProgress, [0, 1], [50, 180]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const blob3Y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Smooth Fade-In Animations
  const sunVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.1, duration: 2.5, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full h-screen flex flex-col relative overflow-x-hidden justify-center">
      <motion.div
        animate={{ opacity: isInView ? 0 : 1 }}
        // transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed top-0 left-0 z-50"
      >
        <NavigationNavbar />
      </motion.div>

      {/* Name Section with Parallax */}
      <motion.div style={{ y: textY }} className="w-full z-50">
        <h2 className="text-[156px] px-4 leading-[7.5rem] -tracking-[0.1em] text-right font-light">
          {getCharsDelayed("valen", 1.2, 0.1)}
        </h2>
      </motion.div>

      <motion.div style={{ y: textY }} className="w-full">
        <h2 className="text-[156px] px-4 leading-[7.5rem] -tracking-[0.1em] text-right font-light">
          {getCharsDelayed("tina", 1.3, 0.1)}
        </h2>
      </motion.div>

      <motion.div style={{ y: textY }} className="w-full z-50">
        <h2 className="text-[156px] pr-4 pl-10 leading-[7.5rem] -tracking-[0.1em] text-center font-light">
          {getCharsDelayed("mar", 1.4, 1)}
        </h2>
      </motion.div>

      <motion.div ref={heroRef} style={{ y: textY }} className="w-full">
        <h2 className="text-[156px] px-4 leading-[7.5rem] -tracking-[0.1em] text-right font-light">
          {getCharsDelayed("iño", 1.5, 1)}
        </h2>
      </motion.div>

      {/* Subtitles with Parallax */}
      <motion.div
        style={{ y: subtitlesY }}
        className="px-3 mt-6 py-3 w-full flex flex-col items-end"
      >
        <motion.div
          className="bg-black/40 h-[0.5px] w-44 mb-3"
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "48%" }}
          transition={{ duration: 0.8, delay: 2.2 }}
        />
        <p className="leading-5">
          {getCharsDelayed("Frontend Developer", 1.1, 0.02)}
        </p>
        <p className="leading-5">{getCharsDelayed("Artisan", 1.5, 0.02)}</p>
        <p className="leading-5">{getCharsDelayed("Polyglot", 1.5, 0.02)}</p>
      </motion.div>

      {/* Floating Blobs with Parallax + Smooth Appearance */}
      <motion.div
        style={{ y: blob1Y }}
        variants={sunVariants}
        initial="hidden"
        animate="visible"
        className="absolute -top-[15%] -left-[9%] w-[200px] h-[200px] rounded-full blur-lg overflow-hidden opacity-80"
      >
        <video
          ref={videoRef}
          src="/media/celophane-blob.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-[200%] h-[200%] relative"
        />
      </motion.div>

      <motion.div
        style={{ y: blob2Y }}
        variants={sunVariants}
        initial="hidden"
        animate="visible"
        className="absolute top-[45%] z-0 -right-[10%] w-[228px] h-[228px] rounded-full blur-lg overflow-hidden opacity-80"
      >
        <video
          src="/media/metalic-water.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full relative"
        />
      </motion.div>

      <motion.div
        style={{ y: blob3Y }}
        variants={sunVariants}
        initial="hidden"
        animate="visible"
        className="absolute top-[60%] z-0 -left-[18%] w-44 h-44 rounded-full blur-lg overflow-hidden opacity-80 rotate-180"
      >
        <video
          src="/media/mercury-blobs.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full relative"
        />
      </motion.div>
    </div>
  );
};

export default MobileHero;
