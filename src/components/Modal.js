import React from "react";
import "./Modal.css";

export default function Modal({ closeModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => closeModal(false)}>X</button>
        </div>
        <div className="body"></div>
        <div className="footer">
          <a
            href="https://web.whatsapp.com/send?phone=6285817911180"
            target="_blank"
            rel="noreferrer"
            className="btn-messageMe"
          >
            Balas ucapan :)
          </a>
        </div>
      </div>
    </div>
  );
}
