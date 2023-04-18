import React from "react";
import { motion } from "framer-motion";
import styles from "@/styles/ExperienceDetails.module.scss";
import { useBackgroundColor } from "@/components/Background";
import Head from "next/head";
import Link from "next/link";
import { Inter } from "next/font/google";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Verto() {
  useBackgroundColor("rgb(80, 60, 152)");

  return (
    <>
      <Head>
        <title>Andre Fong @ Verto</title>
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
        <meta name="title" content="Andre Fong @ Verto" />
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
          content="https://andrefong.com/experience/verto"
        />
        <meta property="og:title" content="Andre Fong @ Verto" />
        <meta
          property="og:description"
          content="Andre Fong is a full stack engineer developing with React's Next.js and working at Verto Health; specializing in automated testing with Cypress."
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://andrefong.com/experience/verto"
        />
        <meta property="twitter:title" content="Andre Fong @ Verto" />
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
            <h1 className={styles.title}>Verto Health</h1>
            <div className={styles.subtitle}>Jr. QA Automation Developer</div>
            <p className={styles.paragraph}>
              In the winter of 2023, I had the great pleasure of starting my
              first internship at{" "}
              <a target="_blank" rel="noreferrer" href="https://verto.health/">
                Verto Health
              </a>
              , a healthcare tech startup based in Toronto.
            </p>
            <p className={styles.paragraph}>
              Verto&apos;s main mission was to bring a modern solution to the
              outdated world of healthcare that still saw the use of paper files
              and fax machines (sadly). Throughout the past 4 months, I&apos;ve
              become a key part of the QA team and grown attached to
              Verto&apos;s culture and its people.
            </p>

            <div className={styles.picture_container}>
              <div className={styles.picture}>
                <Image
                  src="/verto-group-picture.jpg"
                  alt="New hires for Verto, 2023"
                  fill
                  priority
                  style={{ objectFit: "cover", objectPosition: "top" }}
                />
              </div>
              <div className={styles.caption}>
                Group photo of new hires at Verto as of 2023 Jan!
              </div>
            </div>

            <div className={styles.section_heading}>Responsibilities</div>
            <p className={styles.paragraph}>
              Our growing QA team was in charge of a{" "}
              <span className={styles.bold}>robust automated test suite </span>
              that ran against all of Verto&apos;s technical solutions. The
              suite was maintained in Javascript using{" "}
              <a
                href="https://www.cypress.io/"
                target="_blank"
                rel="noreferrer"
              >
                Cypress
              </a>{" "}
              and mostly consisted of end-to-end tests, simulating how clients
              would use our software.
            </p>
            <p className={styles.paragraph}>
              Alongside bug reporting, I played a large part in maintaining our
              existing test suite, ranging from fixing faulty test logic to
              adding new tests to cover new features. Frequent communication
              with cross-functional teams was key, especially the adjacent
              product and full stack teams.
            </p>
            <p className={styles.paragraph}>
              I also had the opportunity to work on several innovation projects
              - one aimed to add{" "}
              <span className={styles.bold}>copy-and-paste functionality </span>
              to Cypress, a currently unsupported feature. This had previously
              been a blocker for QA, as it was a common use case for our clients
              that had remained untested. The new feature has since been rolled
              out to existing tests - alongside Typescript documentation on how
              to use it.
            </p>

            <div className={styles.section_heading}>
              Lighthouse - A New Project
            </div>
            <p className={styles.paragraph}></p>

            <div className={styles.section_heading}>Development</div>
            <p className={styles.paragraph}></p>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
