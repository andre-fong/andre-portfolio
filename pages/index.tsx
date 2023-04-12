import Head from "next/head";
import Link from "next/link";
import { Inter, PT_Sans_Narrow } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import Greeting from "@/components/Greeting";
import PersonIcon from "@mui/icons-material/Person";
import ComputerIcon from "@mui/icons-material/Computer";
import WorkIcon from "@mui/icons-material/Work";

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
            <Greeting />
            <span className={styles.introduction}>ANDRE!</span>
          </div>
          <div className={`${styles.description} ${ptSansNarrow.className}`}>
            I&#39;M A FULL STACK DEVELOPER CURRENTLY WORKING @{" "}
            <span className={styles.verto}>
              <a
                href="https://verto.health/"
                target="_blank"
                rel="noopener noreferrer"
              >
                VERTO HEALTH
              </a>
            </span>
            .
          </div>
        </div>
        <div className={styles.navigation}>
          <Link href="/about">
            <div className={styles.button} title="About Me">
              <PersonIcon fontSize="inherit" />
            </div>
          </Link>

          <Link href="/projects">
            <div className={styles.button} title="My Projects">
              <ComputerIcon fontSize="inherit" />
            </div>
          </Link>

          <Link href="/experience">
            <div className={styles.button} title="My Experience">
              <WorkIcon fontSize="inherit" />
            </div>
          </Link>
        </div>
      </main>
    </>
  );
}
