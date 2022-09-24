import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import { GiPresent } from "react-icons/gi";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video src="/Videos/ancol.mp4" autoPlay loop muted />
      <img src="./Images/happy-anniversary.png" width={"200px"} />
      <span>Adiska Khairunissa</span>
      <span className="hafidh">from Hafidh Albar Muhammad</span>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          onClick={() => alert("wew")}
        >
          Baca ucapan
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Hadiah <GiPresent />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
