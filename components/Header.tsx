import { useState } from "react";
import styles from "@/styles/Header.module.scss";
import { PT_Sans_Narrow } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
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

  function toggleDropdown() {
    setDropdownOpen((prev) => !prev);
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

  return (
    <div className={`${styles.content} ${ptSansNarrow.className}`}>
      <div className={styles.logo}>
        <motion.div
          className={styles.picture_container}
          whileHover={{
            scale: 1.2,
            transition: {
              type: "spring",
              duration: 0.15,
            },
          }}
          whileTap={{ scale: 1.1, transition: { duration: 0.1 } }}
        >
          <motion.div
            className={styles.picture}
            initial={{ scale: 1.0, rotateZ: 0 }}
            animate={{ rotateZ: [10, -10, 10, -10, 10, 0] }}
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
                <motion.li className={styles.action} variants={actionContainer}>
                  <a
                    href="https://github.com/andre-fong"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GitHubIcon fontSize="inherit" />
                  </a>
                </motion.li>

                <motion.li className={styles.action} variants={actionContainer}>
                  <a
                    href="https://www.linkedin.com/in/andre-fong/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LinkedInIcon fontSize="inherit" />
                  </a>
                </motion.li>

                <motion.li className={styles.action} variants={actionContainer}>
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
    </div>
  );
}
