import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";

const Cardmainmap = ({ card }) => {
  return (
    <Grid
      sx={{
        width: "100%",
        padding: "30px",
        display: "flex",
        gap: "20px",
        borderRadius: "16px",
        boxShadow: "0px 4px 16px rgba(158, 158, 158, 0.25)",
        background: "#FFFFFF",
      }}
    >
      <Grid>
        <img src={`${card.imageURL}`} alt="" width={500} />
      </Grid>
      <Grid
        sx={{
          display: "flex",
          gap: "30px",
          flexDirection: "column",
          width: "300px",
        }}
      >
        <Box> {card.type}</Box>
        <Box sx={{ fontSize: "24px", fontWeight: "700" }}> {card.ner}</Box>
        <Box> {card.text}</Box>
        <Button
          sx={{
            borderRadius: "40px",
            backgroundColor: "blue",
            width: "15vh",
            height: "20%",
            padding: "5%",
            marginTop: "1%",
            fontSize: "15px",
            fontWeight: "400",
          }}
          color="info"
        >
          Book now
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
        overflowX: "scroll",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        marginTop: "20%",
        marginRight: "0 !important",
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
      <Box sx={{ display: "flex", gap: "2% ", padding: "20px" }}>
        {coti.map((card, index) => (
          <Cardmainmap key={index} card={card} />
        ))}
      </Box>
    </Grid>
  );
};

export default Offers;
