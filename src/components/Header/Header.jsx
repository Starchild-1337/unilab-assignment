import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = ({ user, setIsBackdropOpen }) => {
  return (
    <header className="header">
      <div className="header__left">
        <NavLink className="nav-link" to={"form"}>
          Form
        </NavLink>
        <NavLink className="nav-link" to={"api"}>
          api
        </NavLink>
      </div>
      <div className="header__user-panel">
        <span>{user?.name}</span>
        <div className="header__avatar" onClick={() => setIsBackdropOpen(true)}>
          <img src={user?.avatar} alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
