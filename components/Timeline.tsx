import React from "react";
import styles from "@/styles/Timeline.module.scss";
import { Experience } from "@/pages/experience";
import { motion } from "framer-motion";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

interface TimelineProps {
  experience: Experience[];
}

const inter = Inter({ subsets: ["latin"] });

export default function Timeline({ experience }: TimelineProps) {
  const pointsContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const point = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <>
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        exit={{ width: "0%" }}
        className={styles.line}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        exit={{ opacity: 0 }}
        className={`${styles.bg_title} ${inter.className}`}
      >
        MY EXPERIENCE
      </motion.div>

      <motion.div
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
      >
        <motion.ol
          className={styles.points_container}
          variants={pointsContainer}
          initial="hidden"
          animate="visible"
        >
          {experience.map((item, index) => (
            <motion.li
              variants={point}
              key={index}
              className={`${styles.timeline_point} ${inter.className}`}
            >
              <div
                className={styles.half_section}
                style={{ visibility: index % 2 ? "visible" : "hidden" }}
              >
                <motion.div
                  className={styles.circle}
                  style={{
                    backgroundColor: item.secondaryColor,
                  }}
                  initial={{
                    boxShadow: `${item.secondaryColor} 0px 0px 40px 0px`,
                  }}
                  animate={{
                    boxShadow: [
                      `${item.secondaryColor} 0px 0px 40px 0px`,
                      `${item.secondaryColor} 0px 0px 40px 10px`,
                      `${item.secondaryColor} 0px 0px 40px 0px`,
                      `${item.secondaryColor} 0px 0px 40px 0px`,
                      `${item.secondaryColor} 0px 0px 40px 0px`,
                    ],
                  }}
                  transition={{
                    duration: 5,
                    delay: 0.2 + index * 0.3,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                >
                  {index % 2 && (
                    <>
                      <div className={styles.icon_container}>
                        <Link href={item.link}>
                          <Image src={`/${item.icon}`} alt={item.title} fill />
                        </Link>
                      </div>
                      <Link href={item.link}>
                        <div className={styles.description}>
                          <div className={styles.title}>{item.year}</div>
                          <div className={styles.subtitle}>{item.title}</div>
                          <div className={styles.paragraph}>
                            {item.description}
                          </div>
                        </div>
                      </Link>
                    </>
                  )}
                </motion.div>
                <div className={styles.up_connector} />
              </div>

              <div
                className={styles.point}
                style={{ backgroundColor: item.color }}
              />

              <div
                className={styles.half_section}
                style={{ visibility: index % 2 ? "hidden" : "visible" }}
              >
                <div className={styles.down_connector} />
                <motion.div
                  className={styles.circle}
                  style={{ backgroundColor: item.secondaryColor }}
                  initial={{
                    boxShadow: `${item.secondaryColor} 0px 0px 40px 0px`,
                  }}
                  animate={{
                    boxShadow: [
                      `${item.secondaryColor} 0px 0px 40px 0px`,
                      `${item.secondaryColor} 0px 0px 40px 10px`,
                      `${item.secondaryColor} 0px 0px 40px 0px`,
                      `${item.secondaryColor} 0px 0px 40px 0px`,
                      `${item.secondaryColor} 0px 0px 40px 0px`,
                    ],
                  }}
                  transition={{
                    duration: 5,
                    delay: 0.2 + index * 0.3,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                >
                  {!(index % 2) && (
                    <>
                      <div className={styles.icon_container}>
                        <Link href={item.link}>
                          <Image src={`/${item.icon}`} alt={item.title} fill />
                        </Link>
                      </div>
                      <Link href={item.link}>
                        <div className={styles.description}>
                          <h2 className={styles.title}>{item.year}</h2>
                          <div className={styles.subtitle}>{item.title}</div>
                          <div className={styles.paragraph}>
                            {item.description}
                          </div>
                        </div>
                      </Link>
                    </>
                  )}
                </motion.div>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </motion.div>
    </>
  );
}
