import React from "react";
import { Box, Grid } from "@mui/material";
import Coti from "./Catigorcard";

const Herocard = () => {
  const coti = [
    {
      ner: "Beaches",
      imageURL: "/pic/2.svg",
    },
    {
      ner: "Deserts",
      imageURL: "/pic/3.svg",
    },
    {
      ner: "Mountains",
      imageURL: "/pic/4.svg",
    },
    {
      ner: "Iconic Cities",
      imageURL: "/pic/5.svg",
    },
    {
      ner: "Houseboats",
      imageURL: "/pic/6.svg",
    },
    {
      ner: "Countryside",
      imageURL: "/pic/7.svg",
    },
    {
      ner: "Camping",
      imageURL: "/pic/8.svg",
    },
    {
      ner: "Castles",
      imageURL: "/pic/9.svg",
    },
    {
      ner: "Skiing",
      imageURL: "/pic/10.svg",
    },
    {
      ner: "Tropical",
      imageURL: "/pic/11.svg",
    },
  ];
  return (
    <Grid sx={{ marginTop: "2%", marginBottom: "3%" }}>
      <Box sx={{ display: "flex", gap: "6% " }}>
        {coti.map((card, index) => (
          <Coti key={index} card={card} />
        ))}
      </Box>
    </Grid>
  );
};

export default Herocard;
