import React, { useState } from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import { IoMdMailUnread } from "react-icons/io";
import { Howl, Howler } from "howler";
import Modal from "./Modal";

const HeroSection = () => {
  const [isPlayed, setIsPlay] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const soundPlay = () => {
    const sound = new Howl({
      src: ["/Audios/Lukas-Graham.mp3"],
    });

    sound.play();
  };

  const touchScreen = () => {
    if (!isPlayed) {
      soundPlay();
      setIsPlay(true);
    }
  };

  Howler.volume(1.0);

  return (
    <div className="hero-container" onTouchStart={() => touchScreen()}>
      <video src="/Videos/ancol.mp4" autoPlay loop muted />
      <img
        src="./Images/happy-anniversary.png"
        width={"200px"}
        alt="apa aja bole"
      />
      <span>Adiska Khairunissa</span>
      <span className="hafidh">from Hafidh Albar Muhammad</span>
      {openModal && <Modal closeModal={setOpenModal} />}
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          onClick={() => setOpenModal(true)}
        >
          Baca ucapan <IoMdMailUnread />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
