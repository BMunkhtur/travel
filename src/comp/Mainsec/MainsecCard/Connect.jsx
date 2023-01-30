import React from "react";
import { Box, Grid, Typography, Card } from "@mui/material";

const Cardthree = ({ card }) => {
  return (
    <Grid
      sx={{
        padding: "20px ",
        borderRadius: "16px",
        boxShadow: "0px 4px 16px rgba(158, 158, 158, 0.25)",
        background: "#FFFFFF",
      }}
    >
      <Box>
        <img src={`${card.imageURL}`} alt="" width={400} height={310} />
        <Box
          sx={{
            color: "dark",
            fontSize: "28px",
          }}
        >
          {card.ner}
        </Box>
        <Box
          sx={{
            opacity: "0.5",
          }}
        >
          <Typography> {card.type}</Typography>
          <Typography> {card.count}</Typography>
        </Box>
      </Box>
    </Grid>
  );
};
const Connect = () => {
  const coti = [
    {
      ner: "India",
      imageURL: "/pic/30.png",
      type: "Travel community",
      count: "155,073 travelers",
    },
    {
      ner: "India",
      imageURL: "/pic/30.png",
      type: "Travel community",
      count: "155,073 travelers",
    },
    {
      ner: "Travel Talk",
      imageURL: "/pic/31.png",
      type: "Travel community",
      count: "155,073 travelers",
    },
    {
      ner: "India",
      imageURL: "/pic/30.png",
      type: "Travel community",
      count: "155,073 travelers",
    },
    {
      ner: "Travel Talk",
      imageURL: "/pic/31.png",
      type: "Travel community",
      count: "155,073 travelers",
    },
    {
      ner: "India",
      imageURL: "/pic/30.png",
      type: "Travel community",
      count: "155,073 travelers",
    },
    {
      ner: "Travel Talk",
      imageURL: "/pic/31.png",
      type: "Travel community",
      count: "155,073 travelers",
    },
  ];
  return (
    <Grid
      sx={{
        marginBottom: "10%",
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
        Connect with other travelers in our community
      </Typography>
      <Grid
        sx={{
          display: "flex",
          overflowX: "auto",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          padding: "20px",
          gap: "2%",
        }}
      >
        {coti.map((card, index) => (
          <Cardthree key={index} card={card} />
        ))}
      </Grid>
    </Grid>
  );
};

export default Connect;
