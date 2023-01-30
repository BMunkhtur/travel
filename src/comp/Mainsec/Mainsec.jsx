import React from "react";
import { Container, Grid } from "@mui/material";
import Offers from "./MainsecCard/Offers";
import Browse from "./MainsecCard/Browse";
import Plan from "./MainAssi/Plan";
import Connect from "./MainsecCard/Connect";
import Travelapp from "./MainAssi/Travelapp";
const Mainsec = () => {
  return (
    <Grid>
      <Container maxWidth="xl">
        <Offers />
        <Browse />
        <Plan />
        <Connect />
      </Container>
      <Travelapp />
    </Grid>
  );
};

export default Mainsec;
