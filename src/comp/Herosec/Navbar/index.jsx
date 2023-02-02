import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button, Modal } from "@mui/material";
import { NavLink } from "react-router-dom";
import Login from "./Auth/Login";
import React, { useState } from "react";

const drawerWidth = 240;
const navItems = ["Home", "Stays", "Flight", "Packages"];

function Navbar({ login, logout, user, open, handleClose, handleOpen }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        trxvl.
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const clicked = (i) => {
    setIndex(i);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        sx={{
          background: "transparent",
          boxShadow: "none",
          position: "absolute",
          display: "flex",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h3"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              fontSize: { xs: "24px", sm: "40px" },
              marginLeft: { xs: "37%", sm: "0" },
            }}
          >
            trxvl.
          </Typography>
          <Box
            sx={{ display: { xs: "none", sm: "flex", alignItems: "center" } }}
          >
            {navItems.map((item, i) => (
              <NavLink
                style={{
                  textDecoration: "none",
                }}
                to={"/" + item}
              >
                <Button
                  sx={{
                    padding: "0",
                    textTransform: "none",
                    fontSize: "24px",
                    color: "white",
                    margin: "1vw",
                    opacity: i === index ? "1" : "0.9",
                    borderBottom: i === index ? "1px white solid" : "none",
                    borderRadius: "0",
                    "&:hover": { background: "none" },
                  }}
                  onClick={() => clicked(i)}
                >
                  {item}
                </Button>
              </NavLink>
            ))}
            {user ? (
              <Button
                onClick={() => {
                  logout();
                }}
                sx={{
                  padding: "0",
                  fontWeight: "700",
                  fontSize: "24px",
                  color: "#fff",
                  textTransform: "none",
                  marginLeft: "2vw",
                  opacity: "0.8",
                }}
              >
                Sign Out
              </Button>
            ) : (
              <Button
                onClick={handleOpen}
                sx={{
                  padding: "0",
                  fontWeight: "700",
                  fontSize: "24px",
                  color: "#fff",
                  textTransform: "none",
                  marginLeft: "2vw",
                  opacity: "0.8",
                }}
              >
                Sign In
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Modal open={open} onClose={handleClose}>
        <Login handleClose={handleClose} login={login} />
      </Modal>
    </Box>
  );
}
export default Navbar;
