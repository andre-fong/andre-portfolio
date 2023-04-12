import { useTheme } from "@/components/ThemeContext";
import styles from "@/styles/Background.module.scss";
import useScreenSize from "@/utils/useScreenSize";
import { motion } from "framer-motion";
import { useEffect, useCallback } from "react";

export default function Background() {
  const { theme } = useTheme();
  const color = theme === "dark" ? "rgb(30,30,30)" : "rgb(245,245,245)";

  const { width, height } = useScreenSize();

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const blob = document.getElementById("blob") as HTMLDivElement;
      const { clientX, clientY } = e;

      if (!blob || !width || !height) return;

      // Delta X and Y
      const x = clientX - width / 2;
      const y = clientY - height / 2;

      blob.animate(
        { left: `${clientX}px`, top: `${clientY}px` },
        { duration: 4000, fill: "forwards", easing: "ease-in-out" }
      );
      // blob.style.left = `${width / 2 - x / 6}px`;
      // blob.style.top = `${height / 2 - y / 6}px`;
    },
    [width, height]
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <div
      className={styles.content}
      style={{
        backgroundColor: color,
      }}
    >
      <motion.div
        className={styles.blob}
        id="blob"
        animate={{
          rotate: [0, 90, 180, 270, 360],
          scaleX: [1, 1.5, 1, 1.3, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.25, 0.5, 0.75, 1],
        }}
      ></motion.div>
      <div className={styles.blur}></div>
    </div>
  );
}
