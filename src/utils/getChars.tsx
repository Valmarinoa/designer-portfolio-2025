import { motion } from "framer-motion";
import { translate } from "@/constants/variants";

export const getChars = (word: string) => {
  return word.split("").map((char, i) => (
    <motion.span
      custom={[i * 0.07, (word.length - i) * 0.03]}
      variants={translate}
      initial="initial"
      animate="enter"
      exit="exit"
      key={char + i}
    >
      {char}
    </motion.span>
  ));
};

export const getCharsDelayed = (
  word: string,
  animationDelay: number,
  characterAnimationDelay: number
) => {
  return word.split("").map((char, i) => (
    <motion.span
      custom={[
        animationDelay + i * 0.05,
        animationDelay + (word.length - i) * characterAnimationDelay,
      ]}
      variants={translate}
      initial="initial"
      animate="enter"
      exit="exit"
      key={char + i}
      className="inline-block will-change-transform transform-gpu "
    >
      {char}
    </motion.span>
  ));
};
