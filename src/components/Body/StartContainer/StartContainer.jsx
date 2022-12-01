import React from "react";
import CustomBtn from "../../SharedComponents/CustomBtn";

import styles from "./styles.module.css";

const StartContainer = () => {
  return (
    <section className={styles.container}>
      <h3>Boost your links today</h3>
      <CustomBtn className={styles.boost_Btn} text="Get Started" />
    </section>
  );
};

export default StartContainer;
