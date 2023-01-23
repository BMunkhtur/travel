import React from "react";
import Navbar from "../comp/Herosec/Navbar/index";
import { Container, Grid } from "@mui/material";
import Herotitle from "../comp/Herosec/Searchinput/Herotitle";
import { Box } from "@mui/system";
import SearchInput from "../comp/Herosec/Searchinput/Searchinput";
import { Height } from "@mui/icons-material";
import Maintitle from "../comp/Herosec/Searchinput/Maintitle";
import Herocard from "../comp/Herosec/Herocard/Herocard";
import Imagecard from "../comp/Herosec/Herocard/Imagecard";
import Boxshadow from "../comp/Herosec/Herocard/Boxshadow";
import Cardmain from "../comp/Mainsec/Cardmain";
import Mainsec from "../comp/Mainsec/Mainsec";
import Maintwo from "../comp/Mainsec/Maintwo";
import Mainthree from "../comp/Mainsec/Mainthree";
import Mainfour from "../comp/Mainsec/Mainfour";
import Footer from "../comp/Mainsec/Footer";

const Home = () => {
  return (
    <Grid
      sx={{
        background: "url(/pic/1.png) no-repeat ",
        backgroundSize: "cover",
        width: "100%",
        height: "100vh",
        fill: "linearGradient rgba(255, 255, 255, 0)",
        zIndex: "-1",
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
        <Boxshadow />
        <Mainfour />
        {/* <Example /> */}
        <Footer />
      </Box>
    </Grid>
  );
};

export default Home;
