import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Nav from "../Nav/Nav.js";
import Menu from "@mui/icons-material/Menu";
import logo from "../../assets/images/icons/SiteSeers03.png";

const Header = (props) => {
  const { menuOpen, setMenuOpen } = props;

  return (
    <header>
      <Link to="/">
        <div className="logo-container flex-row justify-center align-center">
          <img className="logo" src={logo} alt="logo"></img>
        </div>
      </Link>
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
