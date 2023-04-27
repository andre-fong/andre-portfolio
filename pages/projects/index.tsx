import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { useBlobSwitch, useBackgroundColor } from "@/components/Background";
import { PT_Sans_Narrow } from "next/font/google";
import useScreenSize from "@/utils/useScreenSize";
import styles from "@/styles/Projects.module.scss";
import { Tooltip } from "@mui/material";

const ptSansNarrow = PT_Sans_Narrow({
  subsets: ["latin"],
  weight: ["400", "700"],
});

type TabId =
  | "wordle"
  | "unispaces"
  | "portfolio"
  | "chefswap"
  | "instagram"
  | "terminal";

interface Tab {
  id: TabId;
  name: string;
  icon: string;
  bg?: string;
}

export default function Projects() {
  useBlobSwitch(false);
  useBackgroundColor("#192B4F");

  const { width } = useScreenSize();
  const [tabsOpen, setTabsOpen] = useState<TabId[]>([]);

  useEffect(() => {
    // Set z-index of tabs according to tabs order
  }, [tabsOpen]);

  function clickTab(tab: TabId) {
    const localTabs = [...tabsOpen];
    if (localTabs.includes(tab)) localTabs.splice(localTabs.indexOf(tab), 1);
    localTabs.push(tab);
    setTabsOpen(localTabs);
  }

  const tabs: Tab[] = [
    {
      id: "wordle",
      name: "Wordle Step",
      icon: "/wordle-step.png",
    },
    {
      id: "unispaces",
      name: "Unispaces",
      icon: "/unispaces.png",
    },
    {
      id: "portfolio",
      name: "Portfolio",
      icon: "/android-chrome-192x192.png",
    },
    {
      id: "chefswap",
      name: "Chefswap",
      icon: "/chefswap.png",
      bg: "white",
    },
    {
      id: "instagram",
      name: "Instagram Clone",
      icon: "/instagram.webp",
    },
  ];

  return (
    <>
      <Head>
        <title>Andre Fong | Projects</title>
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
        <meta name="title" content="Andre Fong | Projects" />
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
        <meta property="og:url" content="https://andrefong.com/projects" />
        <meta property="og:title" content="Andre Fong | Projects" />
        <meta
          property="og:description"
          content="Andre Fong is a full stack engineer developing with React's Next.js and working at Verto Health; specializing in automated testing with Cypress."
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://andrefong.com/projects" />
        <meta property="twitter:title" content="Andre Fong | Projects" />
        <meta
          property="twitter:description"
          content="Andre Fong is a full stack engineer developing with React's Next.js and working at Verto Health; specializing in automated testing with Cypress."
        />
      </Head>

      <motion.div className={styles.dock_container}>
        <div className={styles.dock}>
          {tabs.map((tab, i) => (
            <Tooltip
              title={<div className={styles.mui_tooltip}>{tab.name}</div>}
              key={i}
              arrow
              placement="top"
              leaveDelay={100}
            >
              <motion.div className={styles.icon_container} key={i}>
                <button
                  className={styles.icon}
                  style={{ backgroundColor: tab.bg || "transparent" }}
                  onClick={() => clickTab(tab.id)}
                >
                  <Image
                    src={tab.icon}
                    alt={tab.name}
                    fill
                    style={{
                      objectFit: "cover",
                      transform: tab.bg ? "scale(0.8)" : "",
                    }}
                  />
                </button>
                <div
                  className={styles.icon_open}
                  style={{
                    backgroundColor: tabsOpen.includes(tab.id)
                      ? "white"
                      : "transparent",
                  }}
                />
              </motion.div>
            </Tooltip>
          ))}

          <motion.div className={styles.dock_separator} />

          <Tooltip
            title={<div className={styles.mui_tooltip}>Terminal</div>}
            arrow
            placement="top"
            leaveDelay={100}
          >
            <motion.div className={styles.icon_container}>
              <button
                className={styles.icon}
                onClick={() => clickTab("terminal")}
              >
                <Image
                  src="/terminal.png"
                  alt="Terminal"
                  fill
                  style={{
                    objectFit: "cover",
                    transform: "scale(1.25)",
                  }}
                />
              </button>
              <div
                className={styles.icon_open}
                style={{
                  backgroundColor: tabsOpen.includes("terminal")
                    ? "white"
                    : "transparent",
                }}
              />
            </motion.div>
          </Tooltip>
        </div>
      </motion.div>
    </>
  );
}
