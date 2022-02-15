import React from "react";
import "./home.scss";
import Background from "../../assets/img/background.png";

const Home = () => {
  return (
    <img src={Background} alt="background" className="homeImage" />
  );
};

export default Home;
