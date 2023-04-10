import Background from "@/components/Background";
import ThemeProvider from "@/components/ThemeContext";
import Header from "@/components/Header";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider>
        <Header />
        <Component {...pageProps} />
        <Background />
      </ThemeProvider>
    </>
  );
}
