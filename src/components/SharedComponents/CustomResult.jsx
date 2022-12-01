import React from "react";
import { Container, Row, Col } from "react-bootstrap/Container";

import CustomBtn from "./CustomBtn";

import styles from "./styles.module.css";

const CustomResult = (props) => {
  return (
    <Container className={styles.result}>
      <Row>
        <Col sm={6} className={styles.row}>
          <p>{props.URL}</p>
        </Col>
        <Col sm={4} className={styles.row}>
          <p>{props.ShortedURL}</p>
        </Col>
        <Col sm={2} className={styles.row}>
          <CustomBtn className={styles.copy_Btn} text="copy" />
        </Col>
      </Row>
    </Container>
  );
};

export default CustomResult;
