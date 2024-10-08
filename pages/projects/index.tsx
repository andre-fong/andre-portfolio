import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { AnimatePresence, motion, useAnimate } from "framer-motion";
import { useBlobSwitch, useBackgroundColor } from "@/components/Background";
import { Fira_Code } from "next/font/google";
import useScreenSize from "@/utils/useScreenSize";
import styles from "@/styles/Projects.module.scss";
import { Tooltip } from "@mui/material";
import Window from "@/components/Window";
import Terminal from "@/components/Terminal";

const firaCode = Fira_Code({
  subsets: ["latin"],
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

  const [scope, animate] = useAnimate();

  // Entrance animation
  const [animating, setAnimating] = useState<boolean>(true);
  useBackgroundColor(animating ? "#111111" : "#192B4F");

  // Entrance animation typewriter text
  const [typewriterText, setTypewriterText] = useState<string>("");
  useEffect(() => {
    const text = "cd projects";
    if (typewriterText === text) {
      setTimeout(() => {
        animate(
          `.${styles.typewriter_visible}`,
          { filter: ["brightness(2.3)", "brightness(1)"] },
          { duration: 0.7, ease: "easeIn" }
        );
      }, 150);
      setTimeout(() => {
        setAnimating(false);
      }, 400);
    } else {
      setTimeout(() => {
        setTypewriterText(text.slice(0, typewriterText.length + 1));
      }, 60);
    }
  }, [typewriterText, animate]);

  // List of tabs that are open, e.g., ["wordle", "unispaces"],
  // such that the last element is the tab on top
  const [tabsOpen, setTabsOpen] = useState<TabId[]>([]);

  // List of tabs that are minimized (still shows as opened on taskbar)
  const [tabsMinimized, setTabsMinimized] = useState<TabId[]>([]);

  /**
   * Clicks tab, unminimizing if it was minimized, and bringing it to the top of the opened tabs stack
   * @param tab TabId to click
   */
  function clickTab(tab: TabId) {
    // Unminimize tab
    if (tabsMinimized.includes(tab)) {
      const localTabs = [...tabsMinimized];
      localTabs.splice(localTabs.indexOf(tab), 1);
      setTabsMinimized(localTabs);
    }

    // Bring to the top of the opened tabs stack
    const localTabs = [...tabsOpen];
    if (localTabs.includes(tab)) localTabs.splice(localTabs.indexOf(tab), 1);
    localTabs.push(tab);
    setTabsOpen(localTabs);
  }

  /**
   * Minimizes tab, removing it from the opened tabs stack and adding it to the minimized tabs stack
   * @param tab TabId to minimize
   */
  function minimizeTab(tab: TabId) {
    // Remove from opened tabs stack
    const localTabs = [...tabsOpen];
    if (localTabs.includes(tab)) localTabs.splice(localTabs.indexOf(tab), 1);
    setTabsOpen(localTabs);

    // Add to minimized tabs stack
    if (!tabsMinimized.includes(tab))
      setTabsMinimized((prev) => [...prev, tab]);
  }

  /**
   * Closes tab, removing it from both the opened tabs stack and the minimized tabs stack
   * @param tab TabId to close
   */
  function closeTab(tab: TabId) {
    // Remove from opened tabs stack
    const localTabs = [...tabsOpen];
    if (localTabs.includes(tab)) localTabs.splice(localTabs.indexOf(tab), 1);
    setTabsOpen(localTabs);

    // Remove from minimized tabs stack
    const localMinimizedTabs = [...tabsMinimized];
    if (localMinimizedTabs.includes(tab))
      localMinimizedTabs.splice(localMinimizedTabs.indexOf(tab), 1);
    setTabsMinimized(localMinimizedTabs);
  }

  function isTabOnTop(tab: TabId) {
    return tabsOpen[tabsOpen.length - 1] === tab;
  }

  function isTabOpenOrMinimized(tab: TabId) {
    return tabsOpen.includes(tab) || tabsMinimized.includes(tab);
  }

  /**
   * Get tab order given TabId `(-1 <= order <= tabs.length, order ≠ 0)`
   * @param tab TabId to get order of
   * @returns `-1` if tab is not open, otherwise the order of the tab where the window with the greatest order is on top
   */
  function getTabOrder(tab: TabId) {
    return tabsOpen.includes(tab)
      ? tabs.length - (tabsOpen.length - 1 - tabsOpen.indexOf(tab))
      : -1;
  }

  const tabs: Tab[] = [
    {
      id: "wordle",
      name: "Wordle Step",
      icon: "/wordle-step.png",
    },
    {
      id: "unispaces",
      name: "UniSpaces",
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
        <meta property="og:url" content="https://andrefong.com/projects" />
        <meta property="og:title" content="Andre Fong | Projects" />
        <meta
          property="og:description"
          content="Full-stack developer creating innovative and eye-catching web applications. Currently working at Symcor and studying at UofT Scarborough."
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://andrefong.com/projects" />
        <meta property="twitter:title" content="Andre Fong | Projects" />
        <meta
          property="twitter:description"
          content="Full-stack developer creating innovative and eye-catching web applications. Currently working at Symcor and studying at UofT Scarborough."
        />
      </Head>

      <AnimatePresence mode="wait">
        {animating ? (
          <motion.div
            className={styles.typewriter_container}
            key="typewriter"
            exit={{ opacity: 0, y: -200 }}
            transition={{ ease: [0.72, -0.44, 0.87, 1.43], duration: 0.4 }}
            ref={scope}
          >
            <motion.div
              className={`${styles.typewriter} ${firaCode.className}`}
              aria-hidden="true"
              role="presentation"
            >
              cd projects
              <motion.span
                aria-hidden="true"
                role="presentation"
                className={styles.cursor}
              />
              <motion.div aria-hidden="false" className={styles.typewriter_row}>
                <motion.div className={styles.typewriter_visible}>
                  {typewriterText}
                </motion.div>
                <motion.span className={styles.cursor} />
              </motion.div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            className={styles.dock_container}
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.7,
              type: "spring",
              damping: 10,
              delay: 0.15,
            }}
            key="dock"
          >
            <div className={styles.dock}>
              {tabs.map((tab, i) => (
                <Tooltip
                  title={<div className={styles.mui_tooltip}>{tab.name}</div>}
                  key={i}
                  arrow
                  placement="top"
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
                        priority
                        style={{
                          objectFit: "cover",
                          transform: tab.bg ? "scale(0.8)" : "",
                        }}
                      />
                    </button>
                    <div
                      className={styles.icon_open}
                      style={{
                        backgroundColor: isTabOpenOrMinimized(tab.id)
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
                      priority
                      style={{
                        objectFit: "cover",
                        transform: "scale(1.25)",
                      }}
                    />
                  </button>
                  <div
                    className={styles.icon_open}
                    style={{
                      backgroundColor: isTabOpenOrMinimized("terminal")
                        ? "white"
                        : "transparent",
                    }}
                  />
                </motion.div>
              </Tooltip>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Window
        order={getTabOrder("terminal")}
        title="Terminal"
        width={500}
        height={300}
        minimize={() => minimizeTab("terminal")}
        close={() => closeTab("terminal")}
      >
        <Terminal
          isOnTop={isTabOnTop("terminal")}
          isClosed={!isTabOpenOrMinimized("terminal")}
        />
      </Window>
    </>
  );
}
