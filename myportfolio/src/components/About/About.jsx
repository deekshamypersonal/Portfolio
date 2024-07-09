import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        {/* <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        /> */}
        <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
        <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Languages:</h3>
              <br></br>
              <p>
              C, C++, Java, SQL
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend:</h3>
              <br></br>
              <p>
              HTML, CSS, JavaScript, ReactJS, Tailwind CSS
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
        <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Frameworks and Libraries:</h3>
              <br></br>
              <p>
              JDBC, Spring Boot, Hibernate, REST API, JUnit, Mockito, Kafka
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Cloud and Infrastructure:</h3>
              <br></br>
              <p>
              AWS, Docker, Git
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};