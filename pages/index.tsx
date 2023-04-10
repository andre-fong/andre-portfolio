import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Inter, Comfortaa, PT_Sans_Narrow } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import Greeting from "@/components/Greeting";

const inter = Inter({ subsets: ["latin"] });
const ptSansNarrow = PT_Sans_Narrow({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Andre Fong</title>
      </Head>

      <main className={`${styles.content} ${inter.className}`}>
        <div className={styles.text}>
          <div className={`${styles.greeting} ${ptSansNarrow.className}`}>
            <Greeting />, I{"'"}M ANDRE!
          </div>
          <div className={`${styles.description} ${ptSansNarrow.className}`}>
            I{"'"}M A FULL STACK DEVELOPER CURRENTLY WORKING @ VERTO HEALTH.
          </div>
        </div>
        <div className={styles.navigation}>
          <Link href="/about">
            <div className={styles.button}></div>
          </Link>

          <Link href="/projects">
            <div className={styles.button}></div>
          </Link>

          <Link href="/experience">
            <div className={styles.button}></div>
          </Link>
        </div>
      </main>
    </>
  );
}
