import logo from "./logo.svg";
import "./App.css";
import { Container, Grid } from "@mui/material";
import Home from "./Pages/Home.jsx";
import Detail from "./Pages/Detail";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <Grid className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/Detail" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </Grid>
  );
}

export default App;
