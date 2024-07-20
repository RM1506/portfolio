import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Know Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Rishabh Mishra"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            
            <div className={styles.aboutItemText}>
              <h1><b>Education</b></h1><br/>
              <h3>National Institute of Technology Raipur</h3>
              <p>
                Majoring in Information Technology.<br/>
          
                2021-2025<br/>
                
              </p><br/>
              <p>
                <h3>O.P. Jindal School</h3>
                <b>Class 12th</b>: Studied Physics,Chemistry Mathematics,Informatics Practices and Physical Education.<br/>
                <b>Class 10th</b>: Studied Social Sciences,Mathematics,English,Science and Sanskrit.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            
            <div className={styles.aboutItemText}>
              <h3>Hobbies</h3>
              <p>
              Playing and watching Cricket.<br/>
              I have a deep passion for nature and love to spend my leisure hours soaking in the serenity and beauty of the natural world.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};