import React from "react";
import Container from "react-bootstrap/Container";

import styles from "./styles.module.css";

import brandRecognition from "../../../images/icon-brand-recognition.svg";
import detailedRecords from "../../../images/icon-detailed-records.svg";
import fullyCustomizable from "../../../images/icon-fully-customizable.svg";
import StatisticsCard from "../../SharedComponents/StatisticsCard";

const Statistics = () => {
  return (
    <section className={styles.statistics}>
      <Container className={styles.statistics_title}>
        <h2>Advanced Statistics</h2>

        <p className={styles.statistics_desc}>
          Track how your links are performing across the web with <br /> our
          advanced statistics dashboard
        </p>
      </Container>
      <section className={styles.statistics_cards}>
        <StatisticsCard
          src={brandRecognition}
          title="Brand Recognition"
          text="Boost your brand recognition with each click.Generic links don't mean a thing. Branded links help instil confidence in your content."
        />
        <StatisticsCard
          src={detailedRecords}
          title="Detailed Records"
          text="Gain insight into who is clicking your links. Knowing when and where people engage with yur content helps inform better decisions."
        />{" "}
        <StatisticsCard
          src={fullyCustomizable}
          title="Fully Customizable"
          text="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
        />
      </section>
    </section>
  );
};

export default Statistics;
