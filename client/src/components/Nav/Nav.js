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
                <Link
                  to="/search"
                  className="nav-link"
                  onClick={() => {
                    setMenuOpen(false);
                  }}
                >
                  Search
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="nav-link"
                  onClick={() => {
                    setMenuOpen(false);
                  }}
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="nav-link"
                  onClick={() => {
                    setMenuOpen(false);
                    Auth.logout();
                  }}
                >
                  Logout
                </Link>
              </li>
            </ul>
          </>
        ) : (
          <>
            <ul>
              <li>
                <Link
                  to="/login"
                  className="nav-link"
                  onClick={() => {
                    setMenuOpen(false);
                  }}
                >
                  Log In
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="nav-link"
                  onClick={() => {
                    setMenuOpen(false);
                  }}
                >
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
