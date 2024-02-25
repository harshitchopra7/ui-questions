import React from "react";

// styles
import "./WinModal.css";

function WinModal({ wonPlayer, closeModal }) {
  return (
    <div className="win-modal-container">
      <div className="win-modal-close-icon" onClick={closeModal}>
        X
      </div>
      <div className="win-modal-description">{wonPlayer} has won!</div>
    </div>
  );
}

export default WinModal;
