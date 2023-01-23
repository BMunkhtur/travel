import React from "react";
import { Box, Grid, Typography, Card } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Cardthree = ({ card }) => {
  return (
    <Grid
      sx={{
        padding: "20px ",
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
const Mainthree = () => {
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
      ner: "Beach",
      imageURL: "/pic/32.png",
      type: "Travel community",
      count: "155,073 travelers",
    },
    {
      ner: "Mountains",
      imageURL: "/pic/33.png",
      type: "Travel community",
      count: "155,073 travelers",
    },
    {
      ner: "Beach",
      imageURL: "/pic/32.png",
      type: "Travel community",
      count: "155,073 travelers",
    },
    {
      ner: "Mountains",
      imageURL: "/pic/33.png",
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
      {" "}
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
      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          justifyContent: "space-between",
        }}
      >
        {coti.map((card, index) => (
          <Cardthree key={index} card={card} />
        ))}
      </Box>
    </Grid>
  );
};

export default Mainthree;
