import React from "react";
import Modal from "./modal";
import { Box, Grid, Typography, Button } from "@mui/material";

const Cardmainmap = ({ card }) => {
  return (
    <Grid
      sx={{
        width: "100%",
        display: "flex",
        gap: "20px",
        borderRadius: "16px",
        boxShadow: "0px 4px 16px rgba(158, 158, 158, 0.25)",
        background: "#FFFFFF",
        padding: "20px 20px 20px 2px",
      }}
    >
      <Grid sx={{ marginLeft: "20px" }}>
        <img src={`${card.imageURL}`} alt="" width={500} />
      </Grid>
      <Grid
        sx={{
          display: "flex",
          gap: "30px",
          flexDirection: "column",
          width: "300px",
          marginLeft: "20px",
        }}
      >
        <Box> {card.type}</Box>
        <Box sx={{ fontSize: "24px", fontWeight: "700" }}> {card.ner}</Box>
        <Box> {card.text}</Box>
        <Button
          sx={{
            borderRadius: "40px",
            backgroundColor: "blue",
            width: "200px",
            padding: "5%",
            marginTop: "10%",
            fontSize: "15px",
            fontWeight: "400",
          }}
          color="info"
        >
          <Modal />
        </Button>
      </Grid>
    </Grid>
  );
};
const Offers = () => {
  const coti = [
    {
      ner: "Huge savings on flight with trxvl.",
      imageURL: "/pic/24.png",
      type: "Domestic Flights",
      text: "Book domestic flights starting @ just ₹1459",
    },
    {
      ner: "Enjoy upto 20% off on International Hotels.",
      imageURL: "/pic/23.png",
      type: "International Hotels",
      text: "Make the most of  this deal on your first booking with trxvl.",
    },
    {
      ner: "Huge savings on flight with trxvl.",
      imageURL: "/pic/24.png",
      type: "Domestic Flights",
      text: "Book domestic flights starting @ just ₹1459",
    },
    {
      ner: "Enjoy upto 20% off on International Hotels.",
      imageURL: "/pic/23.png",
      type: "International Hotels",
      text: "Make the most of  this deal on your first booking with trxvl.",
    },
  ];
  return (
    <Grid
      sx={{
        marginTop: "4%",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "dark",
          fontWeight: "700",
          width: "900px",
        }}
      >
        Offers
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "2% ",
          padding: "20px 20px 20px 2px",
          overflowX: "scroll",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {coti.map((card, index) => (
          <Cardmainmap key={index} card={card} />
        ))}
      </Box>
    </Grid>
  );
};

export default Offers;
