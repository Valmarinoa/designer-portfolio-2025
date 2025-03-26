import React from "react";
import { motion } from "framer-motion";

const Suns = () => {
  const sunVariants = {
    hidden: { opacity: 0, y: 200, width: 0 }, // Starts fully transparent & shifted down
    visible: {
      opacity: 1,
      width: "100%",
      y: 0, // Moves up smoothly
      transition: { delay: 1, duration: 2.5, ease: "easeOut" }, // Delayed until background is fully open
    },
  };

  const sunVariantsDelayed = {
    hidden: { opacity: 0, y: 100, width: 0 }, // Starts fully transparent & shifted down
    visible: {
      opacity: 1,
      width: "100%",
      y: 0, // Moves up smoothly
      transition: { delay: 2, duration: 4.5, ease: "easeOut" }, // Extra delay before appearing
    },
  };

  return (
    <div className="absolute bottom-44 left-0 right-0">
      {/* Sun Animation */}
      <motion.div
        variants={sunVariants}
        initial="hidden"
        animate="visible"
        className="  absolute left-0 z-10 w-[150vw] h-[110vw] rounded-full bg-[radial-gradient(circle_at_50%_50%,_#FFA10A,_#ffbc0a,_transparent)] blur-3xl"
      ></motion.div>
      <motion.div
        variants={sunVariants}
        initial="hidden"
        animate="visible"
        className=" absolute z-10 w-[120vw] h-[140vw] rounded-full bg-[radial-gradient(circle_at_50%_50%,_#FFA10A,_transparent)] blur-3xl"
      ></motion.div>
      <motion.div
        variants={sunVariantsDelayed} // Uses the delayed animation
        initial="hidden"
        animate="visible"
        className=" absolute z-10 w-[120vw] h-[130vw] rounded-full bg-[radial-gradient(circle_at_50%_50%,_#FF890A,_transparent)] blur-3xl"
      ></motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 200 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { delay: 1.6, duration: 2.5, ease: "easeOut" },
          },
        }}
        initial="hidden"
        animate="visible"
        className="absolute z-10 w-[120vw] h-[130vw] rounded-full bg-[radial-gradient(circle_at_50%_60%,_#FFA10A,_#ffbc0a,_transparent)] blur-3xl"
      ></motion.div>
    </div>
  );
};

export default Suns;
