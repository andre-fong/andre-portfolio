import React from "react";
import { motion } from "framer-motion";
import styles from "@/styles/ExperienceDetails.module.scss";
import { useBackgroundColor } from "@/components/Background";
import Head from "next/head";
import { Inter } from "next/font/google";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function UofT() {
  useBackgroundColor("rgb(0, 42, 130)");

  return (
    <>
      <Head>
        <title>Andre Fong @ UofT</title>
        {/* Favicons */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#8b4000" />

        {/* SEO */}
        <meta name="title" content="Andre Fong @ UofT" />
        <meta
          name="description"
          content="Andre Fong is a full stack engineer developing with React's Next.js and working at Verto Health; specializing in automated testing with Cypress."
        />
        <meta
          name="keywords"
          content="andre fong, andre fong computer science, andre fong UofT, andre fong UTSC, andre fong website, andre fong portfolio"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />

        {/* OG */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://andrefong.com/experience/uoft"
        />
        <meta property="og:title" content="Andre Fong @ UofT" />
        <meta
          property="og:description"
          content="Andre Fong is a full stack engineer developing with React's Next.js and working at Verto Health; specializing in automated testing with Cypress."
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://andrefong.com/experience/uoft"
        />
        <meta property="twitter:title" content="Andre Fong @ UofT" />
        <meta
          property="twitter:description"
          content="Andre Fong is a full stack engineer developing with React's Next.js and working at Verto Health; specializing in automated testing with Cypress."
        />
      </Head>

      <motion.div
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
      >
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, type: "spring" }}
        >
          <Link href="/experience">
            <div className={`${styles.back} ${inter.className}`}>
              <ArrowBackIosIcon fontSize="large" />
              <div className={styles.back_text}>Back to Experience</div>
            </div>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
          className={`${styles.container} ${inter.className}`}
        >
          <div className={styles.content}>
            <h1 className={styles.title}>University of Toronto, Scarborough</h1>
            <div className={styles.subtitle}>Computer Science</div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
