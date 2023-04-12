import React from "react";
import styles from "@/styles/404.module.scss";
import { PT_Sans_Narrow } from "next/font/google";

const ptSansNarrow = PT_Sans_Narrow({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Custom404() {
  return (
    <div className={`${styles.content} ${ptSansNarrow.className}`}>
      <h1 className={styles.error}>404</h1>
      <p className={styles.description}>Page not found</p>
    </div>
  );
}
