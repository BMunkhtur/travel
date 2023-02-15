import React from "react";
import { Container, Grid, Box } from "@mui/material";
import Offers from "./MainsecCard/Offers";

import Plan from "./MainAssi/Plan";
import Connect from "./MainsecCard/Connect";
import Travelapp from "./MainAssi/Travelapp";
const Mainsec = () => {
  return (
    <Grid>
      <Box sx={{ marginLeft: "11%" }}>
        <Offers />
      </Box>
      <Container maxWidth="xl">
        <Plan />
      </Container>
      <Box sx={{ marginLeft: "11%" }}>
        <Connect />
      </Box>
      <Travelapp />
    </Grid>
  );
};

export default Mainsec;
