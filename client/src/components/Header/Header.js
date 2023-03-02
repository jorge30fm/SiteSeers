import React from "react";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/images/icons/SiteSeers03.png";

const StyledAppBar = styled(AppBar)(() => ({
  backgroundColor: "var(--dark-green)",
  position: "static",
}));

const StyledToolBar = styled(Toolbar)(() => ({
  width: "100%",
  justifyContent: "space-between",
  margin: "10px 0"
}));

const StyledLogo = styled(Avatar)(() => ({
  backgroundColor: "var(--bone)",
  img: {
    width: "40px",
  },
}));

const StyledMenuIcon = styled(MenuIcon)(() => ({
  color: "var(--bone)",
  fontSize: "40px",
}));

const Header = (props) => {
  const { menuOpen, setMenuOpen } = props;

  return (
    <StyledAppBar>
      <StyledToolBar>
        <Link to="/">
          <StyledLogo>
            <img src={logo} alt="logo" />
          </StyledLogo>
        </Link>

        <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Nav>

        <Box>
          <IconButton>
            <StyledMenuIcon
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            />
          </IconButton>
        </Box>
      </StyledToolBar>
    </StyledAppBar>
  );
};

export default Header;
