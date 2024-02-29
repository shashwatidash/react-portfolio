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
                    <li className={styles.aboutItem}><img src={getImageUrl("about/cursorIcon.png")} alt="" />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>Worked on designing several responsive websites.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}><img src={getImageUrl("about/serverIcon.png")} alt="" />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>Experience in building REST APIs.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}