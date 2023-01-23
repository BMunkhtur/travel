import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Cardmainmap from "./Cardmainmap";

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
      {" "}
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
      <Swiper
        spaceBetween={110}
        slidesPerView={2}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation]}
        onSlideChange={() => console.log("slide change")}
      >
        <Box sx={{ display: "flex", gap: "2% " }}>
          {coti.map((card, index) => (
            <SwiperSlide>
              <Cardmainmap key={index} card={card} />
            </SwiperSlide>
          ))}
        </Box>
      </Swiper>
    </Grid>
  );
};

export default Cardmain;
