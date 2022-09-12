import React from "react";
import Nav from "./Nav";
import icon from "../assets/images/icons/menu-icon.png";
import logo from "../assets/images/icons/logo-placeholder.png";

const Header = (props) => {
  const { menuOpen, setMenuOpen } = props;

  return (
    <header>
      <a href="/">
        <img src={logo} alt="logo"></img>
      </a>
      <div className={`${menuOpen && "page-cover"}`}></div>

      <nav className={`${menuOpen && "menu-open"}`}>
        <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Nav>
      </nav>
      <div>
        <img
          src={icon}
          alt="menu icon"
          onClick={() => {
            setMenuOpen(true);
          }}
        ></img>
      </div>
    </header>
  );
};

export default Header;
