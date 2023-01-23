import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Cardthree from "./Cardthree";
import Maindata from "./Maindata";

const Mainsec = () => {
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
    <Grid>
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
        Browse by property type
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
              <Maindata key={index} card={card} />
            </SwiperSlide>
          ))}
        </Box>
      </Swiper>
    </Grid>
  );
};

export default Mainsec;
