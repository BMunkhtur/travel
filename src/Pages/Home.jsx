import React from "react";
import { Grid } from "@mui/material";

import Herosec from "../comp/Herosec/Herosec";
import Mainsec from "../comp/Mainsec/Mainsec";
import Footer from "../comp/Footer/Footer";

const Home = ({ changeMode }) => {
  return (
    <Grid>
      <Herosec />
      <Mainsec />
      <Footer />
    </Grid>
  );
};

export default Home;
