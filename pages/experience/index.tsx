import { useEffect } from "react";
import Head from "next/head";
import { useBlobSwitch, useBackgroundColor } from "@/components/Background";
import { motion } from "framer-motion";
import styles from "@/styles/Experience.module.scss";
import Stars from "@/components/Stars";
import Timeline from "@/components/Timeline";

export interface Experience {
  icon: string;
  year: number;
  title: string;
  description: string;
  color: string;
  secondaryColor: string;
  link: string;
}

export default function Experience() {
  useBlobSwitch(false);
  useBackgroundColor("rgb(30, 30, 30)");

  const experience: Experience[] = [
    {
      icon: "uoft.png",
      year: 2021,
      title: "UofT Scarborough",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies ultricies, nunc elit ultrices nisl,",
      color: "rgb(70, 132, 255)",
      secondaryColor: "lightblue",
      link: "/experience/uoft",
    },
    {
      icon: "verto.png",
      year: 2023,
      title: "Verto Health",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      color: "rgb(157, 92, 255)",
      secondaryColor: "rgb(208, 176, 255)",
      link: "/experience/verto",
    },
  ];

  // Scroll timeline with mouse wheel
  useEffect(() => {
    const container = document.getElementById("scroller");

    function handleWheel(e: WheelEvent) {
      e.preventDefault();
      container!.scrollLeft += e.deltaY + e.deltaX;
    }

    container?.addEventListener("wheel", handleWheel);

    return () => {
      container?.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Andre Fong | Experience</title>
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
        <meta name="title" content="Andre Fong | Experience" />
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
        <meta property="og:url" content="https://andrefong.com/experience" />
        <meta property="og:title" content="Andre Fong | Experience" />
        <meta
          property="og:description"
          content="Andre Fong is a full stack engineer developing with React's Next.js and working at Verto Health; specializing in automated testing with Cypress."
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://andrefong.com/experience"
        />
        <meta property="twitter:title" content="Andre Fong | Experience" />
        <meta
          property="twitter:description"
          content="Andre Fong is a full stack engineer developing with React's Next.js and working at Verto Health; specializing in automated testing with Cypress."
        />
      </Head>
      <motion.div className={styles.content} id="scroller">
        <Timeline experience={experience} />
      </motion.div>

      <Stars count={150} />
    </>
  );
}
