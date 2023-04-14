import { useEffect, useCallback } from "react";
import styles from "@/styles/Stars.module.scss";
import { motion, useAnimate } from "framer-motion";
import useScreenSize from "@/utils/useScreenSize";

interface StarProps {
  count: number;
}

export default function Stars({ count }: StarProps) {
  const [scope, animate] = useAnimate();

  function getRandomNumber(max: number) {
    return Math.floor(Math.random() * max);
  }

  const { width, height } = useScreenSize();

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const { clientX, clientY } = e;

      if (!width || !height) return;

      // Delta X and Y
      const x = clientX - width / 2;
      const y = clientY - height / 2;

      animate("#stars_container", { x: -x / 10, y: -y / 10 }, { duration: 0 });
    },
    [width, height, animate]
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <motion.div
      initial={{ clipPath: "circle(100% at center)" }}
      exit={{ clipPath: "circle(0px at center)" }}
      transition={{ duration: 0.8, ease: "easeIn" }}
      className={styles.container}
      ref={scope}
    >
      <motion.div
        initial={{ clipPath: "circle(0px at center)" }}
        animate={{ clipPath: "circle(100% at center)" }}
        transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
        className={styles.content}
      >
        <motion.div id="stars_container" className={styles.stars_container}>
          {[...Array(count)].map((_, index) => (
            <div
              key={index}
              className={styles.star}
              style={{
                top: `${getRandomNumber(120) - 10}%`,
                left: `${getRandomNumber(120) - 10}%`,
                animationDelay: `${getRandomNumber(10) / 3}s`,
                animationDuration: `${getRandomNumber(4) + 4}s`,
                width: `${getRandomNumber(22) / 10}px`,
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
