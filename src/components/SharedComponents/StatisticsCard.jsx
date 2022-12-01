import React from "react";

import styles from "./styles.module.css";

const StatisticsCard = (props) => {
  return (
    <section className={styles.statistics_card}>
      <img
        className={styles.statistics_img}
        src={props.src}
        alt={props.title}
      />
      <h3>{props.title}</h3>
      <br />
      <p>{props.text}</p>
    </section>
  );
};

export default StatisticsCard;
