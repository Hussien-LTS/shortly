import React from "react";

import Logo from "../../images/logo_footer.svg";
import Facebook from "../../images/icon-facebook.svg";
import Twitter from "../../images/icon-twitter.svg";
import Pinterest from "../../images/icon-pinterest.svg";
import Instagram from "../../images/icon-instagram.svg";

import styles from "./styles.module.css";

const Footer = () => {
  return (
    <article className={styles.container}>
      <section className={styles.logo}>
        <a href="#home">
          <img src={Logo} alt="Logo" />
        </a>
      </section>
      <section>
        <ul className={styles.footer_list}>
          <li>Features</li>
          <li>Link Shorting</li>
          <li>Branded Links</li>
          <li>Analytics</li>
        </ul>
      </section>
      <section>
        <ul className={styles.footer_list}>
          <li>Resources</li>
          <li>Blog</li>
          <li>Developers</li>
          <li>Support</li>
        </ul>
      </section>
      <section>
        <ul className={styles.footer_list}>
          <li>Company</li>
          <li>About</li>
          <li>Our Team</li>
          <li>Careers</li>
          <li>Contacts</li>
        </ul>
      </section>
      <section className={styles.social_container}>
        <a className={styles.social} href="#Facebook">
          <img src={Facebook} alt="Facebook" />
        </a>
        <a className={styles.social} href="#Twitter">
          <img src={Twitter} alt="Twitter" />
        </a>
        <a className={styles.social} href="#Pinterest">
          <img src={Pinterest} alt="Pinterest" />
        </a>
        <a className={styles.social} href="#Instagram">
          <img src={Instagram} alt="Instagram" />
        </a>
      </section>
    </article>
  );
};

export default Footer;
