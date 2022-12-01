import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";

import CustomBtn from "../../SharedComponents/CustomBtn";

import axios from "axios";
import styles from "./styles.module.css";

const AppForm = () => {
  const [url, setURL] = useState("");
  const [error, setError] = useState("");

  const [urlList, setURLList] = useState(() => {
    const saved = localStorage.getItem("history");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  const isValidURL = (str) => {
    if (
      /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g.test(
        str
      )
    ) {
      setError("");
    } else {
      return setError("Please add a valid link");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let input = document.getElementById("link");
      if (url === "") {
        input.style.border = "solid rgb(247, 73, 73) 2px";
        setError("Please add a link");
        return;
      }
      isValidURL(url);
      input.style.border = "none";
      const userUrl = `https://api.shrtco.de/v2/shorten?url=${url}`;
      const response = await axios.post(userUrl);

      setURLList((oldArray) => [
        ...oldArray,
        [url, response.data.result.full_short_link],
      ]);
      setURL("");
    } catch (error) {
      return error;
    }
  };

  const saveToLocalStorage = () => {
    localStorage.setItem("history", JSON.stringify(urlList));
  };
  saveToLocalStorage();

  const handleCopy = (e) => {
    let link = e.target.getAttribute("shorted");
    let copyBtn = document.getElementById(link);
    copyBtn.style.backgroundColor = "#3b3054";
    copyBtn.style.border = "none";
    copyBtn.innerHTML = "Copied!";
    navigator.clipboard.writeText(link);
  };
  return (
    <div className={styles.container}>
      <Form onSubmit={handleSubmit}>
        <Container className={styles.form}>
          <Form.Control
            className={styles.input}
            placeholder="Shorten a link here..."
            id="link"
            onChange={(e) => setURL(e.target.value)}
            value={url}
          />

          <CustomBtn className={styles.submit_btn} text="Shorten It!" />
          <div>{error && <p className={styles.errors}>{error}</p>}</div>
        </Container>
      </Form>

      {urlList &&
        urlList.map((dataItem, i) => {
          return (
            <div key={i} className={styles.short_Link_container}>
              <h2 className={styles.link}>{dataItem[0]}</h2>
              <div className={styles.rightSide}>
                <h2 className={styles.shorted_Link}>{dataItem[1]}</h2>
                <button
                  className={styles.copy_btn}
                  id={dataItem[1]}
                  onClick={handleCopy}
                  shorted={dataItem[1]}
                >
                  Copy
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default AppForm;
