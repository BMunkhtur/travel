import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const ImgCard = ({ card }) => {
  return (
    <Grid>
      <Box
        sx={{
          position: "relative",
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
    </Grid>
  );
};
const Imagecard = () => {
  const coti = [
    {
      ner: "Bali, Indonesia",
      imageURL: "/pic/15.png",
    },
    {
      ner: "Kerry, Ireland",
      imageURL: "/pic/14.png",
    },
    {
      ner: "Sydney, Australia",
      imageURL: "/pic/13.png",
    },
    {
      ner: "Paris, France",
      imageURL: "/pic/22.png",
    },
    {
      ner: "Bali, Indonesia",
      imageURL: "/pic/15.png",
    },
    {
      ner: "Kerry, Ireland",
      imageURL: "/pic/14.png",
    },
    {
      ner: "Sydney, Australia",
      imageURL: "/pic/13.png",
    },
    {
      ner: "Paris, France",
      imageURL: "/pic/22.png",
    },
  ];
  return (
    <Grid>
      <Typography
        variant="h4"
        sx={{
          color: "white",
          fontWeight: "700",
          marginBottom: "2%",
        }}
      >
        Top Vacation Destinations
      </Typography>
      <Grid
        sx={{
          overflowX: "auto",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "2% ",
            zIndex: "1",
            justifyContent: "space-between",
          }}
        >
          {coti.map((card, index) => (
            <ImgCard key={index} card={card} />
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Imagecard;
