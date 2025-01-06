import { Variants } from "framer-motion";
import { AnimationType } from "./types";

export const showUpVariants: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: 10 },
};

export const turnLeftVariants: Variants = {
  initial: { rotateY: 90 },
  animate: { rotateY: 0, transition: { type: "spring" } },
};

export const falldownVariants: Variants = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 10, transition: { type: "spring", stiffness: 400, delay: 0.3 } },
};

export const animations: Record<AnimationType, Variants> = {
  "show-up": showUpVariants,
  "turn-left": turnLeftVariants,
  "fall-down": falldownVariants,
};
