import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "@/styles/Window.module.scss";
import { Inter } from "next/font/google";
import useScreenSize from "@/utils/useScreenSize";

interface WindowProps {
  title: string;
  /**
   * Order of the window, where the window with the highest order is on top
   * and negative order means the window is closed/minimized
   */
  order: number;
  children: React.ReactNode;
  width: number;
  height: number;
  minimize: () => void;
  close: () => void;
}

const inter = Inter({ subsets: ["latin"] });

export default function Window({
  title,
  order,
  children,
  width,
  height,
  minimize,
  close,
}: WindowProps) {
  const { height: browserHeight } = useScreenSize();
  const [hoveringActions, setHoveringActions] = useState<boolean>(false);

  const isOpen = order !== -1;

  const variants = {
    open: { y: 0, scale: 1, transition: { duration: 0.3, ease: "easeIn" } },
    closed: {
      y: browserHeight || 800,
      scale: 0.2,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  return (
    <div className={styles.window_area}>
      <motion.div
        className={styles.window_container}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        style={{
          zIndex: 5 + order,
          width: width,
          height: height,
        }}
      >
        <div className={styles.top_bar}>
          <div className={styles.window_actions}>
            <button
              className={styles.close}
              title="Close"
              onClick={() => close()}
            >
              <span className={styles.action_text}>✕</span>
            </button>
            <button
              className={styles.minimize}
              title="Minimize"
              onClick={() => minimize()}
            >
              <span className={styles.action_text}>─</span>
            </button>
            <button className={styles.maximize} title="View More">
              <span className={styles.action_text}>+</span>
            </button>
          </div>
          <div className={`${styles.window_title} ${inter.className}`}>
            {title}
          </div>
          <div className={styles.window_actions} role="presentation">
            <div className={styles.action_placeholder} />
            <div className={styles.action_placeholder} />
            <div className={styles.action_placeholder} />
          </div>
        </div>

        <div className={styles.window_content} id={"window_" + title}>
          {children}
        </div>
      </motion.div>
    </div>
  );
}
