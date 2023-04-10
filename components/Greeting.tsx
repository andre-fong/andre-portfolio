import { useEffect, useState } from "react";
import styles from "@/styles/Greeting.module.scss";

export default function Greeting() {
  const greetings = ["HEY", "你好", "HOLA", "EHI", "안녕"];
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      setCurrentIndex((curr: number) =>
        curr + 1 >= greetings.length ? 0 : curr + 1
      );
    }, 2000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  return <>HEY</>;
}
