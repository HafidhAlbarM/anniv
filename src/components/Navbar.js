import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GiSelfLove } from "react-icons/gi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Button } from "./Button";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            H&A
            <GiSelfLove />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <AiOutlineClose /> : <AiOutlineMenu />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <a
                // href="whatsapp://send?abid=6285817911180&text=Aku%2C%20sayang%2C%20kamu%2C%20Muach!"
                className="nav-links"
                onClick={closeMobileMenu}
                // href="https://web.whatsapp.com/send?phone=6285817911180?text=Aku%2C%20sayang%2C%20kamu%2C%20Muach!"
                href="https://wa.me/6285817911180?text=Aku%20sayang%20kamu%20Muach!"
                target="_blank"
                rel="noreferrer"
              >
                Give me Feedback
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MzEwNTQwNDYyMDQ3NzM5?story_media_id=2699286126660514313&igshid=NjZiMGI4OTY="
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Memories
              </a>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
