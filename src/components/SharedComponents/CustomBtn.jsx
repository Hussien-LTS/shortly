import React from "react";

const CustomBtn = (props) => {
  return <button className={props.className}>{props.text}</button>;
};

export default CustomBtn;
