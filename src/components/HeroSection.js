import React, { useState } from "react";
import "../App.css";
import "./HeroSection.css";
import { Howl, Howler } from "howler";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const HeroSection = () => {
  const [isPlayed, setIsPlay] = useState(false);
  const dataPhoto = [1, 2, 3, 4, 5, 6];

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
      <span className="swipe-ke-bawah">Swipe ke bawah sayang...</span>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        interval={3000}
        showStatus={false}
        showThumbs={false}
      >
        {dataPhoto.map((data, idx) => {
          return (
            <div>
              <img
                src={process.env.PUBLIC_URL + `Images/${data}.jpg`}
                alt="data"
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default HeroSection;
