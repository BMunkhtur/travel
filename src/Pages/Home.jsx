import React from "react";
import { Grid } from "@mui/material";

import Herosec from "../comp/Herosec/Herosec";
import Mainsec from "../comp/Mainsec/Mainsec";

const Home = ({ changeMode }) => {
  return (
    <Grid>
      <Herosec />
      <Mainsec />
    </Grid>
  );
};

export default Home;
