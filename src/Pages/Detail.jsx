import React from "react";
import Navbar from "../comp/Herosec/Navbar/index";
import { Container, Grid } from "@mui/material";
import Herotitle from "../comp/Herosec/Searchinput/Herotitle";
import { Box } from "@mui/system";
import SearchInput from "../comp/Herosec/Searchinput/Searchinput";

import Maintitle from "../comp/Herosec/Searchinput/Maintitle";
import Herocard from "../comp/Herosec/Herocard/Herocard";
import Imagecard from "../comp/Herosec/Herocard/Imagecard";
import Boxshadow from "../comp/Herosec/Herocard/Boxshadow";

import Footer from "../comp/Mainsec/Footer";
import Cardfivedata from "../comp/Mainsec/Cardfivedata";
import Cardsix from "../comp/Mainsec/Cardsix";
import Cardseven from "../comp/Mainsec/Cardseven";
import Cardnine from "../comp/Mainsec/Cardnine";

const Detail = () => {
  return (
    <Grid
      sx={{
        background: "url(/pic/38.png) no-repeat ",
        backgroundSize: "cover",
        width: "100%",
        height: "100vh",
        fill: "linearGradient rgba(255, 255, 255, 0)",
      }}
    >
      <Box>
        <Grid sx={{ marginLeft: "10%", marginRight: "10%" }}>
          <Navbar />
          <Grid sx={{ marginBottom: "5%" }}>
            <Herotitle />
            <SearchInput />
            <Maintitle />
            <Herocard />
          </Grid>
        </Grid>
        <Grid sx={{ marginLeft: "10%" }}>
          <Cardfivedata />
          <Cardsix />
          <Cardseven />
          <Cardnine />
        </Grid>
        <Boxshadow />
        <Footer />
      </Box>
    </Grid>
  );
};

export default Detail;
