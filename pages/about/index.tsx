import React from "react";
import Head from "next/head";
import Image from "next/image";
import { PT_Sans_Narrow } from "next/font/google";

const ptSansNarrow = PT_Sans_Narrow({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function About() {
  return (
    <>
      <Head>
        <title>Andre Fong | About</title>
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
        <meta name="title" content="Andre Fong | About" />
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
        <meta property="og:url" content="https://andrefong.com/about" />
        <meta property="og:title" content="Andre Fong | About" />
        <meta
          property="og:description"
          content="Full-stack developer creating innovative and eye-catching web applications. Currently working at Symcor and studying at UofT Scarborough."
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://andrefong.com/about" />
        <meta property="twitter:title" content="Andre Fong | About" />
        <meta
          property="twitter:description"
          content="Full-stack developer creating innovative and eye-catching web applications. Currently working at Symcor and studying at UofT Scarborough."
        />
      </Head>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          height: "calc(100% - 100px)",
        }}
      >
        <Image
          src="/under-construction.svg"
          alt="Page under construction, sorry!"
          width={280}
          height={160}
          style={{ marginTop: -100 }}
        />
        <h1
          style={{
            color: "white",
            fontSize: "3em",
            fontWeight: 700,
            marginTop: 50,
          }}
          className={ptSansNarrow.className}
        >
          Page under construction, sorry!
        </h1>
      </div>
    </>
  );
}
