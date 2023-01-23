import React from "react";
import { Box, Grid, Link, Typography } from "@mui/material";

const Catigor = ({ card }) => {
  return (
    <Link href="/Detail">
      <Box
        sx={{
          display: "block",
          textAlign: "center",
          width: "100%",
        }}
      >
        <img src={`${card.imageURL}`} alt="" width={50} />
        <Box sx={{ opacity: "0.4", color: "white" }}>{card.ner}</Box>
      </Box>
    </Link>
  );
};
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
    <Grid>
      <Grid sx={{ marginBottom: "3%" }}>
        <Typography
          variant="h3"
          sx={{ color: "white", fontWeight: "700", width: "900px" }}
        >
          Top categories
        </Typography>
      </Grid>
      <Grid sx={{ marginTop: "2%", marginBottom: "3%" }}>
        <Box sx={{ display: "flex", gap: "6% " }}>
          {coti.map((card, index) => (
            <Catigor key={index} card={card} />
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Herocard;
