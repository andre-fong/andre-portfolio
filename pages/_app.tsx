import Background from "@/components/Background";
import ThemeProvider from "@/components/ThemeContext";
import Header from "@/components/Header";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <ThemeProvider>
        <Header />
        <AnimatePresence mode="wait">
          <Component {...pageProps} key={router.pathname} />
        </AnimatePresence>
        <Background />
      </ThemeProvider>
    </>
  );
}
