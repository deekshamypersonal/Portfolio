import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Deeksha</h1>
        <p className={styles.description}>
        I am a full-stack Java developer with over 5 years of hands-on experience in designing and developing robust applications. I am proficient in Java, Spring Boot, Hibernate, and have extensive knowledge of front-end technologies like ReactJS, facilitating seamless integration with back-end services.
        </p>
        <br></br>
        <p className={styles.description}>I took a 2-year career break for caregiving purposes. During this break, I actively engaged in personal projects to maintain and enhance my technical skills, ensuring they remain up-to-date with current industry standards.</p>
        <a href="https://docs.google.com/document/d/1-FT-zIyHeQpyKqTBA4e2mUzOCXBmIJa-/edit" className={styles.contactBtn}>
          Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};