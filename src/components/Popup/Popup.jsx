import React from "react";
import "./Popup.css";

const Popup = ({ setIsBackdropOpen, logout }) => {
  return (
    <div className="popup">
      <h4>Log out?</h4>
      <div className="popup-btns">
        <button className="btn" onClick={logout}>
          Yes
        </button>
        <button className="btn" onClick={() => setIsBackdropOpen(false)}>
          No
        </button>
      </div>
    </div>
  );
};

export default Popup;
