import React from "react";
import Navbar from "../comp/Herosec/Navbar/index";
import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import SearchInput from "../comp/Herosec/Searchinput/Searchinput";
import Herocard from "../comp/Herosec/Herocard/Herocard";
import Boxshadow from "../comp/Herosec/Herocard/Boxshadow";
import Footer from "../comp/Footer/Footer";
import Cardfivedata from "../comp/Mainsec/MainsecCard/Cardfivedata";
import Cardsix from "../comp/Mainsec/MainsecCard/Cardsix";
import Cardseven from "../comp/Mainsec/MainsecCard/Cardseven";
import Cardnine from "../comp/Mainsec/MainsecCard/Cardnine";

const Detail = () => {
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
          <Cardfivedata />
        </Container>
      </Grid>
      <Container maxWidth="xl">
        <Cardsix />
        <Cardseven />
        <Cardnine />
      </Container>
      <Footer />
    </Grid>
  );
};

export default Detail;
