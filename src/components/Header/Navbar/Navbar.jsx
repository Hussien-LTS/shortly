import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import CustomBtn from "../../SharedComponents/CustomBtn";

import styles from "./styles.module.css";

import Logo from "../../../images/logo.svg";

const AppNavbar = () => {
  const style = {
    background: "hsl(257deg 27% 26%)",
  };
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <img className={styles.logo} src={Logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto my-2 my-lg-0" style={style}>
            <Nav.Link href="#features" className={styles.link}>
              Features
            </Nav.Link>
            <Nav.Link href="#home" className={styles.link}>
              Pricing
            </Nav.Link>
            <Nav.Link href="#pricing" className={styles.link}>
              Resources
            </Nav.Link>

            <CustomBtn className={styles.Btn} text="Login" />
            <CustomBtn className={styles.Btn} text="Sign Up" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
