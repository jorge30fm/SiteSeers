import React from "react";
import "./Nav.css";
import Close from "@mui/icons-material/Close";

const Nav = (props) => {
  const { setMenuOpen } = props;

  return (
    <div className="menu">
      <div className="menu-header">
        <Close
          className="header-icon"
          onClick={() => {
            setMenuOpen(false);
          }}
        />
      </div>
      <div>
        <ul>
          <li>
            <a href="/search" className="nav-link">
              Search
            </a>
          </li>
          <li>
            <a href="/" className="nav-link">
              Dashboard
            </a>
          </li>
          <li>
            <a href="/logout" className="nav-link">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
