import { useState, useEffect } from "react";
import styles from "@/styles/Header.module.scss";
import { PT_Sans_Narrow } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion, AnimatePresence, useAnimate } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const ptSansNarrow = PT_Sans_Narrow({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Header() {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [navMenuOpen, setNavMenuOpen] = useState<boolean>(false);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (navMenuOpen) {
      animate(
        "#line_1",
        { rotateZ: "-45deg", y: 9 },
        { duration: 0.3, ease: "easeOut" }
      );
      animate(
        "#line_2",
        { width: 0, opacity: 0 },
        { duration: 0.3, ease: "easeOut" }
      );
      animate(
        "#line_3",
        { rotateZ: "45deg", y: -9 },
        { duration: 0.3, ease: "easeOut" }
      );
    } else {
      animate(
        "#line_1",
        { rotateZ: "0deg", y: 0 },
        { duration: 0.3, ease: "easeOut" }
      );
      animate(
        "#line_2",
        { width: 30, opacity: 1 },
        { duration: 0.3, ease: "easeOut" }
      );
      animate(
        "#line_3",
        { rotateZ: "0deg", y: 0 },
        { duration: 0.3, ease: "easeOut" }
      );
    }
  }, [navMenuOpen, animate]);

  function toggleDropdown() {
    setDropdownOpen((prev) => !prev);
  }

  function toggleNavMenu() {
    setNavMenuOpen((prev) => !prev);
  }

  const actionsContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const actionContainer = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  function line(delay: number) {
    return {
      hidden: {},
      visible: {
        transition: {
          delayChildren: 0.2 + delay,
          staggerChildren: 0.035,
        },
      },
    };
  }

  function letterVariant(x: number) {
    return {
      hidden: {
        x: x,
        opacity: 0,
      },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          duration: 1,
          type: "spring",
          bounce: 0.43,
          opacity: { duration: 0.2 },
        },
      },
    };
  }

  return (
    <>
      <div className={`${styles.content} ${ptSansNarrow.className}`}>
        <div className={styles.logo}>
          <motion.div
            className={styles.picture_container}
            whileHover={{
              scale: 1.2,
              transition: {
                type: "spring",
                duration: 0.2,
              },
            }}
            whileTap={{ scale: 1.1, transition: { duration: 0.1 } }}
          >
            <motion.div
              className={styles.picture}
              initial={{ scale: 1.0, rotateZ: 0 }}
              animate={{ rotateZ: [10, -12, 15, -12, 10, 0] }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                repeat: Infinity,
                repeatDelay: 4,
              }}
              onClick={toggleDropdown}
            >
              <Image
                src="/logo.jpg"
                fill
                sizes="50px"
                alt="Andre Fong"
                priority
              />
            </motion.div>

            <motion.div
              className={styles.round_border_1}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.2, 0] }}
              transition={{
                duration: 0.5,
                ease: "linear",
                repeat: Infinity,
                repeatDelay: 4,
              }}
            />
            <motion.div
              className={styles.round_border_2}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.2, 0] }}
              transition={{
                duration: 0.5,
                ease: "linear",
                repeat: Infinity,
                repeatDelay: 4,
              }}
            />
            <motion.div
              className={styles.round_border_3}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.2, 0] }}
              transition={{
                duration: 0.5,
                ease: "linear",
                repeat: Infinity,
                repeatDelay: 4,
              }}
            />
            <motion.div
              className={styles.round_border_4}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.2, 0] }}
              transition={{
                duration: 0.5,
                ease: "linear",
                repeat: Infinity,
                repeatDelay: 4,
              }}
            />
          </motion.div>

          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                className={styles.dropdown}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 210 }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
                exit={{ opacity: 0, height: 0, mode: "wait" }}
              >
                <motion.ol
                  className={styles.actions}
                  variants={actionsContainer}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.li
                    className={styles.action}
                    variants={actionContainer}
                  >
                    <a
                      href="https://github.com/andre-fong"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GitHubIcon fontSize="inherit" />
                    </a>
                  </motion.li>

                  <motion.li
                    className={styles.action}
                    variants={actionContainer}
                  >
                    <a
                      href="https://www.linkedin.com/in/andre-fong/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <LinkedInIcon fontSize="inherit" />
                    </a>
                  </motion.li>

                  <motion.li
                    className={styles.action}
                    variants={actionContainer}
                  >
                    <a
                      href="mailto:andre.fong@mail.utoronto.ca"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <EmailIcon fontSize="inherit" />
                    </a>
                  </motion.li>
                </motion.ol>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className={styles.links}>
          <Link href="/">
            <div
              className={
                router.pathname === "/"
                  ? `${styles.link} ${styles.visited}`
                  : styles.link
              }
            >
              HOME
            </div>
          </Link>

          <Link href="/about">
            <div
              className={
                router.pathname === "/about"
                  ? `${styles.link} ${styles.visited}`
                  : styles.link
              }
            >
              ABOUT
            </div>
          </Link>

          <Link href="/projects">
            <div
              className={
                router.pathname === "/projects"
                  ? `${styles.link} ${styles.visited}`
                  : styles.link
              }
            >
              PROJECTS
            </div>
          </Link>

          <Link href="/experience">
            <div
              className={
                router.pathname === "/experience"
                  ? `${styles.link} ${styles.visited}`
                  : styles.link
              }
            >
              EXPERIENCE
            </div>
          </Link>
        </div>
        <button
          className={styles.hamburger_container}
          onClick={toggleNavMenu}
          ref={scope}
        >
          <div className={styles.line_1} id="line_1" />
          <div className={styles.line_2} id="line_2" />
          <div className={styles.line_3} id="line_3" />
        </button>
      </div>

      {/* Navigation drawer (for mobile view) */}
      <AnimatePresence>
        {navMenuOpen && (
          <motion.div
            className={styles.nav_menu_container}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%", mode: "wait" }}
            transition={{ duration: 0.5, ease: [0.8, 0, 0.23, 1] }}
          >
            <motion.div
              exit={{ opacity: 0 }}
              className={`${styles.nav_menu} ${ptSansNarrow.className}`}
            >
              <motion.div
                className={styles.link_bg}
                initial={{ backgroundPosition: "100%" }}
                whileHover={{
                  backgroundPosition: "0%",
                  transition: { duration: 0.4, ease: "easeOut" },
                }}
              >
                <Link
                  href="/"
                  onClick={() => {
                    setNavMenuOpen(false);
                  }}
                >
                  <motion.div className={styles.name}>
                    <motion.div
                      variants={line(0)}
                      initial="hidden"
                      animate="visible"
                    >
                      {"ANDRE ".split("").map((letter, index) => (
                        <motion.div
                          className={styles.line_letter}
                          key={index}
                          variants={letterVariant(100)}
                        >
                          {letter === " " ? "\u00A0" : letter}
                        </motion.div>
                      ))}
                    </motion.div>
                    <motion.div
                      variants={line(0)}
                      initial="hidden"
                      animate="visible"
                    >
                      {"FONG".split("").map((letter, index) => (
                        <motion.div
                          className={styles.line_letter}
                          key={index}
                          variants={letterVariant(100)}
                        >
                          {letter === " " ? "\u00A0" : letter}
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                </Link>
              </motion.div>

              <motion.div
                className={styles.link_bg}
                initial={{ backgroundPosition: "100%" }}
                whileHover={{
                  backgroundPosition: "0%",
                  transition: { duration: 0.4, ease: "easeOut" },
                }}
              >
                <Link
                  href="/about"
                  onClick={() => {
                    setNavMenuOpen(false);
                  }}
                >
                  <motion.div
                    variants={line(0.1)}
                    initial="hidden"
                    animate="visible"
                    className={styles.nav_link}
                  >
                    {"ABOUT".split("").map((letter, index) => (
                      <motion.div
                        className={styles.line_letter}
                        key={index}
                        variants={letterVariant(130)}
                      >
                        {letter === " " ? "\u00A0" : letter}
                      </motion.div>
                    ))}
                  </motion.div>
                </Link>
              </motion.div>

              <motion.div
                className={styles.link_bg}
                initial={{ backgroundPosition: "100%" }}
                whileHover={{
                  backgroundPosition: "0%",
                  transition: { duration: 0.4, ease: "easeOut" },
                }}
              >
                <Link
                  href="/projects"
                  onClick={() => {
                    setNavMenuOpen(false);
                  }}
                >
                  <motion.div
                    variants={line(0.2)}
                    initial="hidden"
                    animate="visible"
                    className={styles.nav_link}
                  >
                    {"PROJECTS".split("").map((letter, index) => (
                      <motion.div
                        className={styles.line_letter}
                        key={index}
                        variants={letterVariant(160)}
                      >
                        {letter === " " ? "\u00A0" : letter}
                      </motion.div>
                    ))}
                  </motion.div>
                </Link>
              </motion.div>

              <motion.div
                className={styles.link_bg}
                initial={{ backgroundPosition: "100%" }}
                whileHover={{
                  backgroundPosition: "0%",
                  transition: { duration: 0.4, ease: "easeOut" },
                }}
              >
                <Link
                  href="/experience"
                  onClick={() => {
                    setNavMenuOpen(false);
                  }}
                >
                  <motion.div
                    variants={line(0.3)}
                    initial="hidden"
                    animate="visible"
                    className={styles.nav_link}
                  >
                    {"EXPERIENCE".split("").map((letter, index) => (
                      <motion.div
                        className={styles.line_letter}
                        key={index}
                        variants={letterVariant(200)}
                      >
                        {letter === " " ? "\u00A0" : letter}
                      </motion.div>
                    ))}
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
