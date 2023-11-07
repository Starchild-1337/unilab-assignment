import React from "react";
import "./Backdrop.css";
import Popup from "../Popup/Popup";

const Backdrop = ({ setIsBackdropOpen, logout }) => {
  const handleBD = (e) => {
    if (e.target.className === "backdrop") {
      setIsBackdropOpen(false);
    }
  };

  return (
    <div className="backdrop" onClick={handleBD}>
      <Popup setIsBackdropOpen={setIsBackdropOpen} logout={logout} />
    </div>
  );
};

export default Backdrop;
