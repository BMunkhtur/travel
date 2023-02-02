import React from "react";
import { Container } from "@mui/material";
import Cardsix from "../comp/Mainsec/MainsecCard/Cardsix";
import Cardseven from "../comp/Mainsec/MainsecCard/Cardseven";
import Cardnine from "../comp/Mainsec/MainsecCard/Cardnine";
const Detail = () => {
  return (
    <Container maxWidth="xl">
      <Cardsix />
      <Cardseven />
      <Cardnine />
    </Container>
  );
};
export default Detail;
