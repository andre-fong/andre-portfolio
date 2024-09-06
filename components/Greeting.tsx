import { useEffect, useState } from "react";
import styles from "@/styles/Greeting.module.scss";
import { useAnimate, motion } from "framer-motion";
import SlideReveal from "@/components/SlideReveal";

export default function Greeting() {
  const greetings = ["HEY", "你好", "HOLA", "よー", "EHI", "안녕"];
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [indexShown, setIndexShown] = useState<number>(0);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    setTimeout(() => {
      setCurrentIndex((curr: number) =>
        curr + 1 >= greetings.length ? 0 : curr + 1
      );
    }, 4000);

    animate(
      "#current",
      { y: "1.5em" },
      { duration: 0.5, delay: 0.5, type: "spring" }
    );
    animate(
      "#next",
      { y: "1.5em" },
      { duration: 0.5, delay: 0.5, type: "spring" }
    );

    setTimeout(() => {
      setIndexShown(currentIndex);
    }, 2000);

    setTimeout(() => {
      animate("#current", { y: "0em" }, { duration: 0 });
      animate("#next", { y: "0em" }, { duration: 0 });
    }, 3500);

    return () => {
      // clear all timeouts
      let id = window.setTimeout(() => {}, 0);
      while (id--) {
        window.clearTimeout(id);
      }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  return (
    <>
      <motion.div
        className={styles.container}
        ref={scope}
        exit={{ clipPath: "inset(0 0 100% 0)" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className={styles.greetings_container}>
          <div id="current" className={styles.currentGreeting}>
            {greetings[indexShown]}
          </div>
          <div id="next" className={styles.nextGreeting}>
            {greetings[currentIndex]}
          </div>
        </div>
        <span>
          {", I'M"
            .split("")
            .map((letter, index) =>
              letter === " " ? (
                " "
              ) : (
                <SlideReveal
                  key={index}
                  content={letter}
                  classname={styles.description_text}
                  random
                />
              )
            )}
          &nbsp;
        </span>
      </motion.div>
    </>
  );
}
