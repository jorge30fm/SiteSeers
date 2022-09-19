import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
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
        {Auth.loggedIn() ? (
          <>
            <ul>
              <li>
                <Link to="/search" className="nav-link">
                  Search
                </Link>
              </li>
              <li>
                <Link to="/" className="nav-link">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/logout" className="nav-link">
                  Logout
                </Link>
              </li>
            </ul>
          </>
        ) : (
          <>
            <ul>
              <li>
                <Link to="/login" className="nav-link">
                  Log In
                </Link>
              </li>
              <li>
                <Link to="/signup" className="nav-link">
                  Sign Up
                </Link>
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default Nav;
