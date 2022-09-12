import React from "react";
import exit from "../assets/images/icons/exit-icon.png";

const Nav = (props) => {
  const { setMenuOpen } = props;

  return (
    <div className="menu">
      <div className="menu-header">
        <img
          className="exit"
          src={exit}
          alt="exit menu"
          onClick={() => {
            setMenuOpen(false);
          }}
        ></img>
      </div>
      <div>
        <ul>
          <li>
            <a href="/" className="nav-link">Search</a>
          </li>
          <li>
            <a href="/" className="nav-link">Dashboard</a>
          </li>
          <li>
            <a href="/" className="nav-link">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
