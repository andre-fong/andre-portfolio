import React from "react";
import { motion } from "framer-motion";
import styles from "@/styles/ExperienceDetails.module.scss";
import { useBackgroundColor } from "@/components/Background";
import Head from "next/head";
import { Inter } from "next/font/google";
import Image from "next/image";
import BackToExperience from "@/components/BackToExperience";

const inter = Inter({ subsets: ["latin"] });

export default function Symcor() {
  useBackgroundColor("#1d7235");

  return (
    <>
      <Head>
        <title>Andre Fong @ Symcor</title>
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
        <meta name="title" content="Andre Fong @ Symcor" />
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
          content="https://andrefong.com/experience/symcor"
        />
        <meta property="og:title" content="Andre Fong @ Symcor" />
        <meta
          property="og:description"
          content="Andre Fong is a full stack engineer developing with React's Next.js and working at Verto Health; specializing in automated testing with Cypress."
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://andrefong.com/experience/symcor"
        />
        <meta property="twitter:title" content="Andre Fong @ Symcor" />
        <meta
          property="twitter:description"
          content="Andre Fong is a full stack engineer developing with React's Next.js and working at Verto Health; specializing in automated testing with Cypress."
        />
      </Head>

      <BackToExperience />

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
            <h1 className={styles.title}>Symcor</h1>
            <div className={styles.subtitle}>Software Developer</div>
            <p className={styles.paragraph}>
              In the summer of 2024, I had the honor of working alongside many
              talented and welcoming people at{" "}
              <a target="_blank" rel="noreferrer" href="https://www.symcor.ca/">
                Symcor
              </a>
              , a prominent data processing company working with some of the
              largest banks in Canada.
            </p>
            <p className={styles.paragraph}>
              Symcor is a very diverse and multifaceted company with one shared
              goal: to fuel business transformation through data. In the
              financial industry, it aims to process banking data, securely
              store/deliver data, and detect fraud. Having worked in the{" "}
              <span className={styles.bold}>
                Payment Processing Services (PPS)
              </span>{" "}
              team for the last 4 months, I&apos;ve been greatly enjoying both
              Symcor&apos;s work ethic and dynamic people-first culture.
            </p>

            <div className={styles.picture_container}>
              <div className={styles.picture}>
                <Image
                  src="/symcor-group-picture.jpg"
                  alt="The legendary yearly Symcor camping trip, colorized"
                  fill
                  priority
                  style={{
                    objectFit: "cover",
                    objectPosition: "bottom right",
                  }}
                />
              </div>
              <div className={styles.caption}>
                The yearly Symcor camping trip, accompanied by some of the
                development team (Orangeville, Ontario)
              </div>
            </div>

            <div className={styles.section_heading}>Responsibilities</div>
            <p className={styles.paragraph}>
              As a software developer in PPS, I spearheaded the development and
              maintenance of an{" "}
              <span className={styles.bold}>internal archive tool </span>
              that stored cheque and financial report data for our client banks.
              This web app saw a plethora of changes since its inception, so{" "}
              <span className={styles.bold}>regression testing </span>
              was also frequently performed before changes were shipped to QA.
            </p>
            <p className={styles.paragraph}>
              I was also responsible for other smaller, investigative tasks such
              as <span className={styles.bold}>GitLab migrations </span>
              for old projects,{" "}
              <span className={styles.bold}>pipeline setup/testing</span>, and{" "}
              <span className={styles.bold}>Proof-of-Concepts (POCs)</span> for
              new ideas we wanted to bring into reality.
            </p>

            <div className={styles.section_heading}>FOA Portal</div>
            <p className={styles.paragraph}>
              One of the main projects I worked on is called{" "}
              <span className={styles.bold}>
                Federated Object Archive (FOA) Portal
              </span>{" "}
              — a web portal that stores over{" "}
              <span className={styles.bold}>
                7 years of cheque and financial report data
              </span>{" "}
              for our major clients. Internal Symcor employees would use FOA
              Portal to retrieve groups of financial data at a time whenever
              requested by clients. As a part of efforts to modernize Symcor
              tools, Portal brought{" "}
              <span className={styles.bold}>significant improvements</span> over
              our previous solutions in archive data retrieval — both in UI and
              in ease of use.
            </p>

            <div className={styles.picture_container}>
              <div className={styles.picture} style={{ aspectRatio: "16/12" }}>
                <Image
                  src="/symcor-foaportal.png"
                  alt="A report opened on FOA Portal amidst other report search results"
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "left",
                  }}
                />
              </div>
              <div className={styles.caption}>
                Mock report data from FOA Portal — an internal cheque and report
                archive tool
              </div>
            </div>

            <p className={styles.paragraph}>
              On the technical side, FOA Portal is a{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://tomcat.apache.org/"
              >
                Tomcat
              </a>{" "}
              project with a frontend built on{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://backbonejs.org/"
              >
                Backbone.js
              </a>{" "}
              and a backend built on{" "}
              <a target="_blank" rel="noreferrer" href="https://spring.io/">
                Java Spring
              </a>
              . The Spring backend acts as a wrapper around the FOA core API,
              which is where the meat and potatoes of FOA lives. I&apos;ve
              worked on both ends of Portal thus far and have been a key
              contributor to its successful adoption.
            </p>
            <p className={styles.paragraph}>
              A notable feature recently added to Portal is the ability to
              search for report data using custom fields tailored to the
              specific report being queried. This allowed users to narrow down
              search results BEFORE receiving their data instead of after,
              significantly improving query times. Moreover, data validation was
              added for each custom field, giving users clarity and an immediate
              response from any unintended form error.
            </p>

            <div className={styles.picture_container}>
              <div className={styles.picture}>
                <Image
                  src="/symcor-foaportal-fields.png"
                  alt="A list of custom search fields for FOA Portal's report search"
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className={styles.caption}>
                Example custom input fields for Symcor reports
              </div>
            </div>

            <div className={styles.section_heading}>Development</div>
            <p className={styles.paragraph}>
              During my phenomenal experience at Symcor, I worked with the
              following frameworks and tools:
            </p>

            <ul className={styles.tools}>
              <a
                href="https://backbonejs.org/"
                target="_blank"
                rel="noreferrer"
              >
                <li className={styles.tool} title="Backbone.js">
                  <Image src="/backbone-logo.png" alt="Backbone.js logo" fill />
                </li>
              </a>
              <a href="https://spring.io/" target="_blank" rel="noreferrer">
                <li className={styles.tool} title="Java Spring">
                  <Image src="/spring-logo.svg" alt="Java Spring logo" fill />
                </li>
              </a>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                rel="noreferrer"
              >
                <li className={styles.tool} title="JavaScript">
                  <Image
                    src="/javascript-logo.png"
                    alt="JavaScript logo"
                    fill
                    style={{
                      borderRadius: "5px",
                    }}
                  />
                </li>
              </a>
              <a
                href="https://www.java.com/en/"
                target="_blank"
                rel="noreferrer"
              >
                <li
                  className={styles.tool}
                  title="Java"
                  style={{ backgroundColor: "white", borderRadius: "50%" }}
                >
                  <Image src="/java-logo.png" alt="Java logo" fill />
                </li>
              </a>
              <a
                href="https://about.gitlab.com/"
                target="_blank"
                rel="noreferrer"
              >
                <li className={styles.tool} title="GitLab">
                  <Image src="/gitlab-logo.png" alt="GitLab logo" fill />
                </li>
              </a>
              <a
                href="https://www.docker.com/"
                target="_blank"
                rel="noreferrer"
              >
                <li className={styles.tool} title="Docker">
                  <Image src="/docker-logo.webp" alt="Docker logo" fill />
                </li>
              </a>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
