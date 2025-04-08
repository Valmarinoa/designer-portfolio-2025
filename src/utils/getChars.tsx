import { motion } from "framer-motion";
import { translate } from "@/constants/variants";

// Fisher-Yates shuffle
const shuffleArray = (arr: number[]) => {
  const array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const getChars = (word: string) => {
  const length = word.length;
  const delayIndexes = shuffleArray(Array.from({ length }, (_, i) => i));

  return word.split("").map((char, i) => {
    const delayIn = delayIndexes[i] * 0.07;
    const delayOut = (length - delayIndexes[i]) * 0.1;

    return (
      <motion.span
        custom={[delayIn, delayOut]}
        variants={translate}
        initial="initial"
        animate="enter"
        exit="exit"
        key={char + i}
      >
        {char}
      </motion.span>
    );
  });
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
