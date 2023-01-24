import React from "react";
import { Box, Grid, Typography, Card } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
const Cardfive = ({ card }) => {
  return (
    <Grid
      sx={{
        padding: "20px ",
        width: "100%",
        zIndex: "5",
        borderRadius: "16px",
        boxShadow: "0px 4px 16px rgba(158, 158, 158, 0.25)",
        background: "#FFFFFF",
      }}
    >
      <Box sx={{ marginBottom: "4%" }}>
        <img src={`${card.imageURL}`} alt="" width={350} height={310} />
      </Box>
      <Box>
        {" "}
        <Box
          sx={{
            color: "dark",
            fontSize: "28px",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box> {card.ner}</Box>
            <Box>
              <StarIcon />
              {card.rating}
            </Box>
          </Box>

          <Box sx={{ opacity: 0.5, fontSize: "18px", marginBottom: "5%" }}>
            {" "}
            {card.time}
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            opacity: "0.5",
            textAlign: "center",
            marginBottom: "5%",
          }}
        >
          <Box>
            <img src={`${card.minimapURL}`} alt="" width={30} height={30} />
            <Box sx={{ color: "black" }}>{card.minimapname}</Box>
          </Box>
          <Box>
            <img src={`${card.minimaptwoURL}`} alt="" width={30} height={30} />
            <Box sx={{ color: "black" }}>{card.minimapnametwo}</Box>
          </Box>
          <Box>
            <img
              src={`${card.minimapthreeURL}`}
              alt=""
              width={30}
              height={30}
            />
            <Box sx={{ color: "black" }}>{card.minimapnamethree}</Box>
          </Box>
          <Box>
            <img src={`${card.minimaptourURL}`} alt="" width={30} height={30} />
            <Box sx={{ color: "black" }}>{card.minimapnamefour}</Box>
          </Box>
        </Box>
        <Box
          sx={{
            opacity: "0.5",
            fontSize: "18px",
            marginBottom: "5%",
          }}
        >
          <li>{card.typeone}</li>
          <li>{card.typetwo}</li>
          <li>{card.typethree}</li>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "20% ",
          }}
        >
          <Box>{card.typefour}</Box>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Box sx={{ fontSize: "24px", fontWeight: "700" }}>
              {card.typefive}
            </Box>
            <Box sx={{ opacity: "0.5", marginTop: "7%" }}>{card.typesix}</Box>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};
const Cardfivedata = () => {
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
    <Grid
      sx={{
        marginBottom: "2%",
        overflowX: "scroll",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      {" "}
      <Typography
        variant="h3"
        sx={{
          color: "white",
          fontWeight: "700",
          width: "900px",
          marginBottom: "1%",
        }}
      >
        Popular Beach Destinations
      </Typography>
      <Box sx={{ display: "flex", gap: "2% ", padding: "20px" }}>
        {coti.map((card, index) => (
          <Cardfive key={index} card={card} />
        ))}
      </Box>
    </Grid>
  );
};

export default Cardfivedata;
