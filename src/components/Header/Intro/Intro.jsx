import React from "react";
import CustomBtn from "../../SharedComponents/CustomBtn";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import illustrationWorking from "../../../images/illustration-working.svg";

import styles from "./styles.module.css";

const Intro = () => {
  return (
    <>
      <Container className={styles.container}>
        <Row>
          <Col md={6}  style={{width:"50%"}}>
            <h1>
              More than just <br />
              shorter links
            </h1>
            <p>
              Build your brand's recognition and get detailed
              <br /> insights on how your links are performing
            </p>
            <CustomBtn className={styles.start_Btn} text="Get Started" />
          </Col>
          <Col md={6} style={{paddingBottom:"55px"}} >
            <img src={illustrationWorking} alt="illustration Working"  style={{width:"100%"}} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Intro;
