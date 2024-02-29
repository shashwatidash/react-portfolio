import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
    return <footer className={styles.container} id="contact">
        <div className={styles.text}>
            <h2>Hire Me</h2>
            <p>Feel free to reach out</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="email-icon" />
                <a href="mailto:/shashwati0207@gmail.com">shashwati0207@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedin-icon" />
                <a href="https://linkedin.com/in/shashwatidash">linkedin.com/shashwatidash</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="github-icon" />
                <a href="https://github.com/shashwatidash">github.com/shashwatidash</a>
            </li>

        </ul>
    </footer>;
}