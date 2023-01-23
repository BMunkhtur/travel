import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Cardthree from "./Cardthree";

const Mainthree = () => {
  const coti = [
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
    <Grid sx={{ marginBottom: "10%" }}>
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
      <Swiper
        spaceBetween={110}
        slidesPerView={4}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation]}
        onSlideChange={() => console.log("slide change")}
      >
        <Box sx={{ display: "flex", gap: "2% " }}>
          {coti.map((card, index) => (
            <SwiperSlide>
              <Cardthree key={index} card={card} />
            </SwiperSlide>
          ))}
        </Box>
      </Swiper>
    </Grid>
  );
};

export default Mainthree;
