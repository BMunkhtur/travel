import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Cardninedata from "./Cardninedata";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import Cardfive from "./Cardfive";

const Cardnine = () => {
  const coti = [
    {
      ner: "Swiss Apls",
      imageURL: "/pic/40.png",
      time: "3Days 4 Nights",
      rating: "4.7",
      typeimageURL: "/pic/40.png",
      typeone: "Tour combo with return airport transfer",
      typetwo: "City Tour",
      typethree: "Curious Corner",
      typefour: "₹88,952",
      typefive: "₹88,952",
      typesix: "Per person",
      minimapname: "2 Flights",
      minimapURL: "/pic/41.svg",
      minimapnametwo: "1 Hotel",
      minimaptwoURL: "/pic/42.svg",
      minimapnamethree: "2 Transfers",
      minimapthreeURL: "/pic/43.svg",
      minimapnamefour: "4 Activities",
      minimaptourURL: "/pic/44.svg",
    },
    {
      ner: "Swiss Apls",
      imageURL: "/pic/40.png",
      time: "3Days 4 Nights",
      rating: "4.7",
      typeimageURL: "/pic/40.png",
      typeone: "Tour combo with return airport transfer",
      typetwo: "City Tour",
      typethree: "Curious Corner",
      typefour: "₹88,952",
      typefive: "₹88,952",
      typesix: "Per person",
      minimapname: "2 Flights",
      minimapURL: "/pic/41.svg",
      minimapnametwo: "1 Hotel",
      minimaptwoURL: "/pic/42.svg",
      minimapnamethree: "2 Transfers",
      minimapthreeURL: "/pic/43.svg",
      minimapnamefour: "4 Activities",
      minimaptourURL: "/pic/44.svg",
    },
    {
      ner: "Swiss Apls",
      imageURL: "/pic/40.png",
      time: "3Days 4 Nights",
      rating: "4.7",
      typeimageURL: "/pic/40.png",
      typeone: "Tour combo with return airport transfer",
      typetwo: "City Tour",
      typethree: "Curious Corner",
      typefour: "₹88,952",
      typefive: "₹88,952",
      typesix: "Per person",
      minimapname: "2 Flights",
      minimapURL: "/pic/41.svg",
      minimapnametwo: "1 Hotel",
      minimaptwoURL: "/pic/42.svg",
      minimapnamethree: "2 Transfers",
      minimapthreeURL: "/pic/43.svg",
      minimapnamefour: "4 Activities",
      minimaptourURL: "/pic/44.svg",
    },
    {
      ner: "Swiss Apls",
      imageURL: "/pic/40.png",
      time: "3Days 4 Nights",
      rating: "4.7",
      typeimageURL: "/pic/40.png",
      typeone: "Tour combo with return airport transfer",
      typetwo: "City Tour",
      typethree: "Curious Corner",
      typefour: "₹88,952",
      typefive: "₹88,952",
      typesix: "Per person",
      minimapname: "2 Flights",
      minimapURL: "/pic/41.svg",
      minimapnametwo: "1 Hotel",
      minimaptwoURL: "/pic/42.svg",
      minimapnamethree: "2 Transfers",
      minimapthreeURL: "/pic/43.svg",
      minimapnamefour: "4 Activities",
      minimaptourURL: "/pic/44.svg",
    },
    {
      ner: "Swiss Apls",
      imageURL: "/pic/40.png",
      time: "3Days 4 Nights",
      rating: "4.7",
      typeimageURL: "/pic/40.png",
      typeone: "Tour combo with return airport transfer",
      typetwo: "City Tour",
      typethree: "Curious Corner",
      typefour: "₹88,952",
      typefive: "₹88,952",
      typesix: "Per person",
      minimapname: "2 Flights",
      minimapURL: "/pic/41.svg",
      minimapnametwo: "1 Hotel",
      minimaptwoURL: "/pic/42.svg",
      minimapnamethree: "2 Transfers",
      minimapthreeURL: "/pic/43.svg",
      minimapnamefour: "4 Activities",
      minimaptourURL: "/pic/44.svg",
    },
  ];
  return (
    <Grid sx={{ marginBottom: "10%" }}>
      <Typography
        variant="h3"
        sx={{
          color: "black",
          fontWeight: "700",
          width: "900px",
          marginBottom: "2%",
          marginTop: "3%",
        }}
      >
        Honeymoon Freebies Special
      </Typography>

      <Swiper
        spaceBetween={90}
        slidesPerView={4}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation]}
        onSlideChange={() => console.log("slide change")}
      >
        <Box sx={{ display: "flex", gap: "2% " }}>
          {coti.map((card, index) => (
            <SwiperSlide>
              <Cardninedata key={index} card={card} />
            </SwiperSlide>
          ))}
        </Box>
      </Swiper>
    </Grid>
  );
};

export default Cardnine;
