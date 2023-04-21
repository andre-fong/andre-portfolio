import { useState, useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
import Link from "next/link";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Inter } from "next/font/google";
import styles from "@/styles/ExperienceDetails.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function BackToExperience() {
  const [scope, animate] = useAnimate();
  const [hover, setHover] = useState<boolean>(false);

  function startHover() {
    setHover(true);
  }
  function stopHover() {
    setHover(false);
  }

  useEffect(() => {
    let animation = animate(
      "#arrow_icon",
      { x: [0, -12, 0], scale: [1, 0.7, 1] },
      {
        duration: 1.1,
        ease: "easeOut",
        repeat: Infinity,
        times: [0, 0.9, 1],
      }
    );
    if (hover) {
      animation.play();
    } else {
      animation.complete();
    }

    return () => {
      animation.stop();
    };
  }, [hover, animate]);

  return (
    <motion.div
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
      ref={scope}
    >
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
        className={styles.back_container}
      >
        <Link href="/experience">
          <motion.div
            className={`${styles.back} ${inter.className}`}
            whileHover={{
              scale: 1.07,
              x: -10,
              transition: { duration: 0.2, type: "spring" },
            }}
            onHoverStart={startHover}
            onHoverEnd={stopHover}
          >
            <motion.div id="arrow_icon">
              <ArrowBackIosIcon fontSize="large" />
            </motion.div>
            <div className={styles.back_text}>Back to Experience</div>
          </motion.div>
        </Link>
      </motion.div>
    </motion.div>
  );
}
