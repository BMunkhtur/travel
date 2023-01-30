import React from "react";
import Navbar from "../comp/Herosec/Navbar/index";
import { Grid, Container } from "@mui/material";
import SearchInput from "../comp/Herosec/Searchinput/Searchinput";
import Herocard from "../comp/Herosec/Herocard/Herocard";
import Boxshadow from "../comp/Herosec/Herocard/Boxshadow";
import Footer from "../comp/Footer/Footer";
import Anothermain from "../comp/Mainsec/MainsecCard/Anothermain";
const Another = () => {
  return (
    <Grid>
      <Grid
        sx={{
          background: "url(/pic/38.png) no-repeat ",
          backgroundSize: "cover",
          width: "100%",
          height: "100vh",
          fill: "linearGradient rgba(255, 255, 255, 0)",
        }}
      >
        <Navbar />
        <Boxshadow />
        <Container maxWidth="xl">
          <SearchInput />
          <Herocard />
        </Container>
      </Grid>
      <Anothermain maxWidth="xl" />
      <Footer />
    </Grid>
  );
};

export default Another;
