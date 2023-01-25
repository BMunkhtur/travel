import logo from "./logo.svg";
import "./App.css";
import { Container, createTheme, Grid } from "@mui/material";
import Home from "./Pages/Home.jsx";
import Detail from "./Pages/Detail";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, CreateTheme } from "@emotion/react";
import { useState } from "react";

function App() {
  const [Isdarkmode, setisdarmmode] = useState(false);
  const theme = createTheme({
    palette: {
      mode: Isdarkmode ? "dark" : "light",
      blue: {
        main: "#ffff",
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
            <Route exact path="/Detail" element={<Detail />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Grid>
  );
}

export default App;
