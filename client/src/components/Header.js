import React from "react";
import icon from "../assets/images/icons/menu-icon.png"
import logo from "../assets/images/icons/logo-placeholder.png"

const Header = () => {
  return (
    <header>
      <a href="/">
        <img src={logo} alt="logo"></img>
      </a>
      <a href="/">
        <img src={icon} alt="menu icon"></img>
      </a>
    </header>
  );
};

export default Header;