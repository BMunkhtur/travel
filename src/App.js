import "./App.css";
import { createTheme, Grid } from "@mui/material";
import Home from "./Pages/Home.jsx";
import Detail from "./Pages/Detail";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, CreateTheme } from "@emotion/react";
import React, { useState } from "react";
import Anothermain from "./comp/Mainsec/MainsecCard/Anothermain";
import Beach from "./comp/test/Categories";
import Footer from "./comp/Footer/Footer";
import Navbar from "./comp/Herosec/Navbar/index";

function App() {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const login = async (email, password) => {
    try {
      const res = await axios.post("http://localhost:8000/signin", {
        email,
        password,
      });
      console.log("SUCCESS", res.data.user);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setUser(res.data.user);
      handleClose();
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const [Isdarkmode, setisdarmmode] = useState(false);
  const theme = createTheme({
    palette: {
      mode: Isdarkmode ? "dark" : "light",
      primary: {
        main: "#800080",
      },
    },
  });
  const changeMode = () => {
    setisdarmmode(!Isdarkmode);
  };
  return (
    <Grid
      className="App"
      sx={{ maxWidth: "1900px", margin: "auto", backgroundColor: "azure" }}
    >
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Navbar
            login={login}
            logout={logout}
            user={user}
            open={open}
            handleClose={handleClose}
            handleOpen={handleOpen}
          />
          <Routes>
            <Route path="/" element={<Home changeMode={changeMode} />} />
            <Route exact path="/Herocard/:id" element={<Detail />} />
            <Route exact path="/Anothermain/:id" element={<Anothermain />} />
            <Route path="/category/:id" element={<Beach />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </ThemeProvider>
    </Grid>
  );
}

export default App;
