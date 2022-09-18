import React from "react";
// import { Link } from "react-router-dom";
import "./Header.css";
import Nav from "../Nav/Nav";
import Menu from "@mui/icons-material/Menu";
import logo from "../../assets/images/icons/logo-placeholder.png";


const Header = (props) => {
  const { menuOpen, setMenuOpen } = props;

  return (
    <header>
      <a href="/">
        <img className="header-icon" src={logo} alt="logo"></img>
      </a>
      <div className={`${menuOpen && "page-cover"}`}></div>

      <nav className={`${menuOpen && "menu-open"}`}>
        <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Nav>
      </nav>
      <div>
        <Menu
          className="header-icon"
          onClick={() => {
            setMenuOpen(true);
          }}
        />
      </div>
    </header>
  );
};

export default Header;
