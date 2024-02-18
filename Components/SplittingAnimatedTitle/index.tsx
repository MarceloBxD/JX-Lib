import styles from "./AnimatedTitle.module.scss";
import { FC } from "react";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";

interface iAnimatedTitle {
  text: string;
}

const AnimatedTitle: FC<iAnimatedTitle> = ({ text }) => {
  let target: HTMLHeadingElement | null;

  setTimeout(() => {
    if (window && document && target) {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const Splitting = require("splitting");
      Splitting({ by: "chars", target: target });
    }
  });

  return (
    <div className={styles.container}>
      <h1
        ref={(el) => {
          target = el;
        }}
        className={styles.text}
        data-splitting
      >
        {text}
      </h1>
    </div>
  );
};

export default AnimatedTitle;
