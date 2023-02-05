import React from "react";
import { Container, Grid } from "@mui/material";
import Cardsix from "../comp/Mainsec/MainsecCard/Cardsix";
import Cardseven from "../comp/Mainsec/MainsecCard/Cardseven";
import Cardnine from "../comp/Mainsec/MainsecCard/Cardnine";
const Detail = () => {
  return (
    <Grid sx={{ marginLeft: "11%" }}>
      <Cardsix />
      <Cardseven />
      <Cardnine />
    </Grid>
  );
};
export default Detail;
