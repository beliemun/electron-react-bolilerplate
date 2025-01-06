import { Transition } from "framer-motion";
import { ReactNode } from "react";
import { CSSProperties } from "styled-components";

export type AnimationType = "show-up" | "turn-left" | "fall-down";

export interface AnimateProps {
  style?: CSSProperties;
  className?: string;
  name?: string | number;
  type?: AnimationType;
  layoutId?: string;
  children?: ReactNode;
  transition?: Transition;
}
