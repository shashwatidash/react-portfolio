import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Hi, I'm Shaswati.
                </h1>
                <p className={styles.desc}>
                    A Software Engineer and problem solver. I've experience as a full-stack developer designing responsive websites and building back-end APIs.
                </p>
                <a className={styles.contactBtn} href="mailto:shashwati0207@gmail.com">
                    Contact Me
                </a>
            </div>
            <img className={styles.heroImg}
                src={getImageUrl("hero/preview.png")}
                alt="hero-image" />
            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>
        </section>
    );
}