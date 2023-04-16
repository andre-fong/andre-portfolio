import React from "react";
import styles from "@/styles/Timeline.module.scss";
import { Experience } from "@/pages/experience";
import { motion } from "framer-motion";
import Image from "next/image";
import { Inter } from "next/font/google";

interface TimelineProps {
  experience: Experience[];
}

const inter = Inter({ subsets: ["latin"] });

export default function Timeline({ experience }: TimelineProps) {
  return (
    <>
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
        className={styles.line}
      />

      <div className={styles.points_container}>
        {experience.map((item, index) => (
          <div
            key={index}
            className={`${styles.timeline_point} ${inter.className}`}
          >
            <div
              className={styles.half_section}
              style={{ visibility: index % 2 ? "visible" : "hidden" }}
            >
              <div
                className={styles.circle}
                style={{ backgroundColor: item.secondaryColor }}
              >
                {index % 2 && (
                  <div className={styles.icon_container}>
                    <Image src={`/${item.icon}`} alt={item.title} fill />
                  </div>
                )}
                <div className={styles.description}>
                  <div className={styles.title}>{item.year}</div>
                  <div className={styles.subtitle}>{item.title}</div>
                  <div className={styles.paragraph}>{item.description}</div>
                </div>
              </div>
              <div className={styles.connector} />
            </div>

            <div
              className={styles.point}
              style={{ backgroundColor: item.color }}
            />

            <div
              className={styles.half_section}
              style={{ visibility: index % 2 ? "hidden" : "visible" }}
            >
              <div className={styles.connector} />
              <div
                className={styles.circle}
                style={{ backgroundColor: item.secondaryColor }}
              >
                {!(index % 2) && (
                  <div className={styles.icon_container}>
                    <Image src={`/${item.icon}`} alt={item.title} fill />
                  </div>
                )}
                <div className={styles.description}>
                  <h2 className={styles.title}>{item.year}</h2>
                  <div className={styles.subtitle}>{item.title}</div>
                  <div className={styles.paragraph}>{item.description}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
