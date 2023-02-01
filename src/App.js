import logo from "./logo.svg";
import "./App.css";
import { Container, createTheme, Grid } from "@mui/material";
import Home from "./Pages/Home.jsx";
import Detail from "./Pages/Detail";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, CreateTheme } from "@emotion/react";
import { useState } from "react";
import Anothermain from "./comp/Mainsec/MainsecCard/Anothermain";
import Beach from "./comp/test/Categories";
import Footer from "./comp/Footer/Footer";

function App() {
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
    <Grid className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
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
