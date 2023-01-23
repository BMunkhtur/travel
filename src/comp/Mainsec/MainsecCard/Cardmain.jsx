import React from "react";
import { Box, Grid, Typography, Card, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Cardmainmap = ({ card }) => {
  return (
    <Card sx={{ width: "100%", padding: "20px", display: "flex", gap: "20px" }}>
      <Grid>
        <img src={`${card.imageURL}`} alt="" width={500} />
      </Grid>
      <Grid
        sx={{
          display: "flex",
          gap: "30px",
          flexDirection: "column",
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
    </Card>
  );
};
const Cardmain = () => {
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
    <Grid>
      <Typography
        variant="h4"
        sx={{
          color: "dark",
          fontWeight: "700",
          width: "900px",
          marginBottom: "2%",
        }}
      >
        Offers
      </Typography>
      <Box sx={{ display: "flex", gap: "2% " }}>
        {coti.map((card, index) => (
          <Cardmainmap key={index} card={card} />
        ))}
      </Box>
    </Grid>
  );
};

export default Cardmain;
