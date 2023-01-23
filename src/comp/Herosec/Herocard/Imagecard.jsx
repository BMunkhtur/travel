import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import ImgCard from "./imgcard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import zIndex from "@mui/material/styles/zIndex";

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
    <Grid sx={{ zIndex: "5" }}>
      <Typography
        variant="h4"
        sx={{
          color: "white",
          fontWeight: "700",
          width: "900px",
          marginBottom: "2%",
        }}
      >
        Top Vacation Destinations
      </Typography>
      <Swiper
        spaceBetween={120}
        zIndex={10}
        slidesPerView={4}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation]}
        onSlideChange={() => console.log("slide change")}
      >
        <Box sx={{ display: "flex", gap: "2% ", zIndex: "4" }}>
          {coti.map((card, index) => (
            <SwiperSlide>
              <ImgCard key={index} card={card} />
            </SwiperSlide>
          ))}
        </Box>
      </Swiper>
    </Grid>
  );
};

export default Imagecard;
