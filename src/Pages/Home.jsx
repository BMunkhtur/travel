import React from "react";
import Navbar from "../comp/Herosec/Navbar/index";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import SearchInput from "../comp/Herosec/Searchinput/Searchinput";
import TopCategories from "../comp/Herosec/Herocard/TopCategories";
import Imagecard from "../comp/Herosec/Herocard/Imagecard";
import Boxshadow from "../comp/Herosec/Herocard/Boxshadow";
import Cardmain from "../comp/Mainsec/MainsecCard/Cardmain";
import Mainsec from "../comp/Mainsec/MainsecCard/Mainsec";
import Maintwo from "../comp/Mainsec/MainAssi/Maintwo";
import Mainthree from "../comp/Mainsec/MainsecCard/Mainthree";
import Mainfour from "../comp/Mainsec/MainAssi/Mainfour";
import Footer from "../comp/Footer/Footer";

const Home = ({ changeMode }) => {
  return (
    <Grid
      sx={{
        background: "url(/pic/1.png) no-repeat  ",
        backgroundBlendMode: "color-burn",
        backgroundSize: "cover",
        width: "100%",
        height: "100vh",
        zIndex: "-100 ",
      }}
    >
      <Box>
        <Grid sx={{ marginLeft: "10%", marginRight: "10%" }}>
          <Navbar changeMode={changeMode} />
          <Grid sx={{ marginBottom: "5%" }}>
            <SearchInput />
            <TopCategories />
          </Grid>
        </Grid>
        <Boxshadow />
        <Grid sx={{ marginLeft: "10%", marginBottom: "5%" }}>
          <Imagecard />
        </Grid>

        <Grid sx={{ marginLeft: "10%" }}>
          <Cardmain />
          <Mainsec />
          <Grid sx={{ marginRight: "10%" }}>
            <Maintwo />
          </Grid>
          <Mainthree />
        </Grid>

        <Mainfour />

        <Footer />
      </Box>
    </Grid>
  );
};

export default Home;
