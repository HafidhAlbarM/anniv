import React from "react";
import "./Modal.css";

export default function Modal({ closeModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => closeModal(false)}>X</button>
        </div>
        <div className="title">
          <h3>Greeting Love Message</h3>
        </div>
        <div className="body">
          <textarea rows="4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </textarea>
        </div>
        <div className="footer">
          <a
            href="https://web.whatsapp.com/send?phone=6285817911180"
            target="_blank"
            className="btn-messageMe"
          >
            Balas ucapan :)
          </a>
        </div>
      </div>
    </div>
  );
}
