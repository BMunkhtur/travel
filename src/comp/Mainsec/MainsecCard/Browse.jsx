import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const Maindata = ({ card }) => {
  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        zIndex: "2",
        borderRadius: "20px",
      }}
    >
      <img src={`${card.imageURL}`} alt="" width={420} height={310} />
      <Box
        sx={{
          color: "dark",
          position: "absolute",
          top: "75%",
          left: "10%",
          color: "white",
          fontSize: "28px",
        }}
      >
        {card.ner}
      </Box>
    </Box>
  );
};

const Browse = () => {
  const coti = [
    {
      ner: "Hotels",
      imageURL: "/pic/25.png",
    },
    {
      ner: "Apartments",
      imageURL: "/pic/26.png",
    },
    {
      ner: "Resorts",
      imageURL: "/pic/27.png",
    },
    {
      ner: "Villas",
      imageURL: "/pic/28.png",
    },
    {
      ner: "Hotels",
      imageURL: "/pic/25.png",
    },
    {
      ner: "Apartments",
      imageURL: "/pic/26.png",
    },
    {
      ner: "Resorts",
      imageURL: "/pic/27.png",
    },
    {
      ner: "Villas",
      imageURL: "/pic/28.png",
    },
  ];
  return (
    <Grid
      sx={{
        overflowX: "scroll",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "black",
          fontWeight: "700",
          width: "900px",
          marginBottom: "2%",
          marginTop: "3%",
        }}
      >
        Browse by property type
      </Typography>
      <Box sx={{ display: "flex", gap: "2% " }}>
        {coti.map((card, index) => (
          <Maindata key={index} card={card} />
        ))}
      </Box>
    </Grid>
  );
};

export default Browse;
