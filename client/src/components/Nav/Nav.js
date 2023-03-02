import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Auth from "../../utils/auth";

const MenuHeader = styled(AppBar)(() => ({
  height: "51px",
  backgroundColor: "var(--dark-green)",
  position: "static",
}));

const MenuBody = styled(Box)(() => ({
  width: "350px",
  height: "100%",
  backgroundColor: "var(--bone)",
}));

const Nav = (props) => {
  const { menuOpen, setMenuOpen } = props;

  const signedInNavItems = [
    { text: "Search", link: "/search" },
    { text: "Dashboard", link: "/" },
    { text: "Sign Out", link: "/" },
  ];
  const signedOutNavItems = [
    { text: "Sign In", link: "/login" },
    { text: "Sign Up", link: "/signup" },
  ];

  const navItems = Auth.loggedIn() ? signedInNavItems : signedOutNavItems;

  return (
    <Drawer
      anchor="right"
      open={menuOpen}
      onClose={() => {
        setMenuOpen(!menuOpen);
      }}
    >
      <MenuHeader />
      <MenuBody>
        <List>
          {navItems.map((navItem) => (
            <ListItem key={navItem.text}>
              <ListItemButton
                component={Link}
                to={navItem.link}
                onClick={() => {
                  setMenuOpen(false);
                  if (navItem.text === "Sign Out") {
                    Auth.logout();
                  }
                }}
              >
                <ListItemText primary={navItem.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </MenuBody>
    </Drawer>
  );
};

export default Nav;
