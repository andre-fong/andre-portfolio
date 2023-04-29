import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "@/styles/Window.module.scss";
import { Inter } from "next/font/google";

interface WindowProps {
  title: string;
  order: number;
  children: React.ReactNode;
  width: number;
  height: number;
}

const inter = Inter({ subsets: ["latin"] });

export default function Window({
  title,
  order,
  children,
  width,
  height,
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
        <div className={`${styles.top_bar}`}>
          <div className={styles.window_actions}>
            <button className={styles.close} title="Close">
              <span className={styles.action_text}>✕</span>
            </button>
            <button className={styles.minimize} title="Minimize">
              <span className={styles.action_text}>─</span>
            </button>
            <button className={styles.maximize} title="View More">
              <span className={styles.action_text}>+</span>
            </button>
          </div>
          <div className={styles.window_title}>{title}</div>
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
