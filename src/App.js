import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div className="main_wrapper">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
