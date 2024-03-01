import React from "react";
import styles from "./About.module.css"
import { getImageUrl } from "../../utils";



export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img className={styles.aboutImage}
                    src={getImageUrl("about/aboutImage.png")} alt="me-sitting" />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}><img src={getImageUrl("about/serverIcon.png")} alt="" />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend</h3>
                            <p>I like designing websites for fun. Currently learning React for development of this webiste.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}><img src={getImageUrl("about/serverIcon.png")} alt="" />
                        <div className={styles.aboutItemText}>
                            <h3>Backend</h3>
                            <p>I work with Java for building backend servers in Spring Boot.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}><img src={getImageUrl("about/serverIcon.png")} alt="" />
                        <div className={styles.aboutItemText}>
                            <h3>Database</h3>
                            <p>I'm skilled in SQL and understand database management concepts well.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}