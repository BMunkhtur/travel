import React from "react";
import { Grid } from "@mui/material";
import Navbar from "./Navbar";
import SearchInput from "./Searchinput/Searchinput";
import Herocard from "./Herocard/Herocard";
import Imagecard from "./Herocard/Imagecard";
import Boxshadow from "./Herocard/Boxshadow";
import { Container } from "@mui/system";

const Herosec = () => {
  return (
    <Grid
      sx={{
        background: "url(/pic/1.png) no-repeat  ",
        backgroundBlendMode: "color-burn",
        backgroundSize: "cover",
        width: "100%",
        height: "100%",
        zIndex: "-100 ",
        boxShadow: " 0px -200px 60px -50px rgba(255,255,255) inset",
      }}
    >
      <Navbar />
      <Container maxWidth="xl">
        <SearchInput />
        <Herocard />
        <Imagecard />
      </Container>
    </Grid>
  );
};

export default Herosec;
