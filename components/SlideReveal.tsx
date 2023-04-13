import React from "react";
import { motion } from "framer-motion";
import styles from "@/styles/SlideReveal.module.scss";

type Direction = "left" | "right" | "up" | "down";

interface SlideRevealProps {
  /**
   * @description Randomly selects a direction for the slide animation
   */
  random?: boolean;

  /**
   * @description Direction for the slide animation (disabled if random is true)
   */
  direction?: Direction;

  /**
   * @description String to be animated
   */
  content: string;

  /**
   * @description Classname for component styles
   */
  classname: string;
}

export default function SlideReveal({
  random,
  direction,
  content,
  classname,
}: SlideRevealProps) {
  const dir: Direction = direction
    ? direction
    : random
    ? (["left", "right", "up", "down"][
        Math.floor(Math.random() * 4)
      ] as Direction)
    : "left";
  const animations = {
    left: {
      initial: { x: "-100%" },
      animate: { x: 0 },
      transition: { duration: 0.5, ease: "easeOut" },
      exit: { clipPath: "inset(0 0 0 100%)" },
    },
    right: {
      initial: { x: "100%" },
      animate: { x: 0 },
      transition: { duration: 0.5, ease: "easeOut" },
      exit: { clipPath: "inset(0 100% 0 0)" },
    },
    up: {
      initial: { y: "-100%" },
      animate: { y: 0 },
      transition: { duration: 0.5, ease: "easeOut" },
      exit: { clipPath: "inset(100% 0 0 0)" },
    },
    down: {
      initial: { y: "100%" },
      animate: { y: 0 },
      transition: { duration: 0.5, ease: "easeOut" },
      exit: { clipPath: "inset(0 0 100% 0)" },
    },
  };

  return (
    <motion.div
      style={{
        display: "inline-block",
        position: "relative",
        overflow: "hidden",
        textShadow: "rgba(0, 0, 0, 0.7) 0px 0px 3px",
      }}
      className={`${classname} ${styles.container}`}
      aria-label={content}
    >
      <motion.div
        style={{
          position: "absolute",
          bottom: 0,
        }}
        initial={animations[dir].initial}
        animate={animations[dir].animate}
        transition={animations[dir].transition}
        exit={animations[dir].exit}
        className={classname}
      >
        {content}
      </motion.div>
    </motion.div>
  );
}
