import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LoginMain from "./Signmodal";
import Link from "@mui/material/Link";
import { Switch } from "@mui/material";

const drawerWidth = 240;
const navItems = ["Home", "Stays", "Flights", "Packages"];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Divider />
      <Link>
        <List>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Link>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", marginBottom: "5%" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{ background: "transparent", boxShadow: "none" }}
      >
        <Toolbar>
          <Typography
            component="div"
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                sm: "block",
                margin: "40px",
                fontWeight: "700",
                lineHeight: "18.4px",
                fontSize: "56px",
              },
            }}
          >
            trxvl.
          </Typography>
          <Link href="/">
            <Box sx={{ display: { sm: "block" } }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{
                    color: "#FFFFFF",
                    fontSize: "28px",
                    textTransform: "capitalize",
                    margin: "15px",
                    fontWeight: "400",
                    lineHeight: "18.4px",
                    textDecoration: "underline",
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>
          </Link>
          <Switch color="success" onChange={props.changeMode}></Switch>
          <LoginMain />
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
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
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography></Typography>
      </Box>
    </Box>
  );
}

export default Navbar;
