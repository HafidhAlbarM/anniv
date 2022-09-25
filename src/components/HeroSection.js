import React, { useState } from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import { GiPresent } from "react-icons/gi";
import { Howl, Howler } from "howler";

const HeroSection = () => {
  const [isPlayed, setIsPlay] = useState(false);

  const soundPlay = () => {
    const sound = new Howl({
      src: ["/Audios/Lukas-Graham.mp3"],
    });

    sound.play();
  };

  const clickButton = () => {
    if (!isPlayed) {
      soundPlay();
      setIsPlay(true);
    }
  };

  Howler.volume(1.0);
  return (
    <div className="hero-container" onTouchStart={() => clickButton()}>
      <video src="/Videos/ancol.mp4" autoPlay loop muted />
      <img
        src="./Images/happy-anniversary.png"
        width={"200px"}
        alt="apa aja bole"
      />
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
