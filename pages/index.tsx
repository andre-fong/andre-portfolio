import Head from "next/head";
import Link from "next/link";
import { Inter, PT_Sans_Narrow } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import Greeting from "@/components/Greeting";
import PersonIcon from "@mui/icons-material/Person";
import ComputerIcon from "@mui/icons-material/Computer";
import WorkIcon from "@mui/icons-material/Work";
import { motion } from "framer-motion";
import SlideReveal from "@/components/SlideReveal";
import { useBlobSwitch, useBackgroundColor } from "@/components/Background";

const inter = Inter({ subsets: ["latin"] });
const ptSansNarrow = PT_Sans_Narrow({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  useBlobSwitch(true);
  useBackgroundColor("rgb(30, 30, 30)");

  const linksContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const linkContainer = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, type: "easeOut" },
    },
  };

  return (
    <>
      <Head>
        <title>Andre Fong | Portfolio</title>
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
        <meta name="title" content="Andre Fong" />
        <meta
          name="description"
          content="Full-stack developer creating innovative and eye-catching web applications. Currently working at Symcor and studying at UofT Scarborough."
        />
        <meta
          name="keywords"
          content="andre fong, andre fong computer science, andre fong UofT, andre fong UTSC, andre fong website, andre fong portfolio, andre fong cs, andre fong verto, andre fong symcor, andre verto, andre symcor, andre cs, andre uoft, andre utsc"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />

        {/* OG */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://andrefong.com/" />
        <meta property="og:title" content="Andre Fong" />
        <meta
          property="og:description"
          content="Full-stack developer creating innovative and eye-catching web applications. Currently working at Symcor and studying at UofT Scarborough."
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://andrefong.com/" />
        <meta property="twitter:title" content="Andre Fong" />
        <meta
          property="twitter:description"
          content="Full-stack developer creating innovative and eye-catching web applications. Currently working at Symcor and studying at UofT Scarborough."
        />
      </Head>

      <main className={`${styles.content} ${inter.className}`}>
        <motion.div
          initial={{ opacity: 0, x: 100, y: 15, rotateZ: 7 }}
          animate={{ opacity: 1, x: 0, y: 0, rotateZ: 0 }}
          transition={{ duration: 0.8, delay: 0.15, type: "spring" }}
          className={styles.text}
        >
          <div className={`${styles.greeting} ${ptSansNarrow.className}`}>
            <Greeting />
            <span className={styles.introduction}>
              {"ANDRE!".split("").map((letter, index) => (
                <SlideReveal
                  key={index}
                  random
                  classname={`${styles.description_text} ${ptSansNarrow.className}`}
                  content={letter}
                />
              ))}
            </span>
          </div>
          <div className={`${styles.description} ${ptSansNarrow.className}`}>
            {"I'M A FULL STACK DEVELOPER CURRENTLY WORKING @ "
              .split(" ")
              .map((word, index) => (
                <>
                  <SlideReveal
                    key={index}
                    random
                    classname={`${styles.description_text} ${ptSansNarrow.className}`}
                    content={word}
                  />{" "}
                </>
              ))}
            <motion.span
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeIn" }}
              className={styles.verto}
            >
              <a
                href="https://www.symcor.ca/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {"SYMCOR.".split(" ").map((word, index) => (
                  <>
                    <SlideReveal
                      key={index}
                      random
                      classname={`${styles.description_text} ${ptSansNarrow.className}`}
                      content={word}
                    />{" "}
                  </>
                ))}
              </a>
            </motion.span>
          </div>
        </motion.div>
        <motion.ol
          variants={linksContainer}
          initial="hidden"
          animate="visible"
          className={styles.navigation}
        >
          <motion.li
            variants={linkContainer}
            className={styles.button_container}
            transition={{ duration: 0.5, ease: "easeOut" }}
            exit={{ opacity: 0, scale: 0 }}
          >
            <Link href="/about">
              <div className={styles.button} title="About Me">
                <PersonIcon fontSize="inherit" />
              </div>
            </Link>
          </motion.li>

          <motion.li
            variants={linkContainer}
            className={styles.button_container}
            transition={{ duration: 0.5, ease: "easeOut" }}
            exit={{ opacity: 0, scale: 0 }}
          >
            <Link href="/projects">
              <div className={styles.button} title="My Projects">
                <ComputerIcon fontSize="inherit" />
              </div>
            </Link>
          </motion.li>

          <motion.li
            variants={linkContainer}
            className={styles.button_container}
            transition={{ duration: 0.5, ease: "easeOut" }}
            exit={{ opacity: 0, scale: 0 }}
          >
            <Link href="/experience">
              <div className={styles.button} title="My Experience">
                <WorkIcon fontSize="inherit" />
              </div>
            </Link>
          </motion.li>
        </motion.ol>
      </main>
    </>
  );
}
