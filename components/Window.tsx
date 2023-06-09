import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "@/styles/Window.module.scss";
import { Inter } from "next/font/google";

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
  // isMinimized: boolean;
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
  // isMinimized,
  minimize,
  close,
}: WindowProps) {
  const [hoveringActions, setHoveringActions] = useState<boolean>(false);

  return (
    <div className={styles.window_area}>
      <motion.div
        className={styles.window_container}
        style={{
          zIndex: 5 + order,
          visibility: order < 0 ? "hidden" : "visible",
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
