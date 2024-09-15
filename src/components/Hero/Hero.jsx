import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Rishabh</h1>
        <p className={styles.description}>
        I'm a student of National Institute of Technology Raipur, final year. Majoring in Information Technology.
        </p>
        <a href="https://drive.google.com/file/d/1mDOodmD915_Pj-dyAhwk6-yzU9luRJj1/view?usp=sharing" target="_blank" className={styles.contactBtn}>
          Download My CV
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
