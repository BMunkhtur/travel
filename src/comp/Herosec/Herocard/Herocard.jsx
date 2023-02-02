import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const Herocard = ({ filterData, setIsCategor }) => {
  const coti = [
    {
      id: "1",
      ner: "All",
      imageURL: "/pic/2.svg",
    },
    {
      id: "1",
      ner: "Beaches",
      imageURL: "/pic/2.svg",
    },
    {
      id: "2",
      ner: "Deserts",
      imageURL: "/pic/3.svg",
    },
    {
      id: "3",
      ner: "Mountains",
      imageURL: "/pic/4.svg",
    },
    {
      id: "4",
      ner: "Iconic Cities",
      imageURL: "/pic/5.svg",
    },
    {
      id: "5",
      ner: "Houseboats",
      imageURL: "/pic/6.svg",
    },
    {
      id: "6",
      ner: "Countryside",
      imageURL: "/pic/7.svg",
    },
    {
      id: "7",
      ner: "Camping",
      imageURL: "/pic/8.svg",
    },
    {
      id: "8",
      ner: "Castles",
      imageURL: "/pic/9.svg",
    },
    {
      id: "9",
      ner: "Skiing",
      imageURL: "/pic/10.svg",
    },
    {
      id: "10",
      ner: "Tropical",
      imageURL: "/pic/11.svg",
    },
  ];
  const Catigor = ({ card }) => {
    return (
      <NavLink>
        <Box
          onClick={() => {
            setIsCategor(card.ner);
          }}
          sx={{
            display: "block",
            textAlign: "center",
            width: "100%",
          }}
        >
          <img src={`${card.imageURL}`} alt="" width={50} />
          <Box
            sx={{
              opacity: "0.4",
              color: "white",
              "&:hover": { opacity: "1" },
            }}
          >
            {card.ner}
          </Box>
        </Box>
      </NavLink>
    );
  };

  return (
    <Grid>
      <Grid sx={{ marginBottom: "3%" }}>
        <Typography
          variant="h3"
          sx={{ color: "white", fontWeight: "700", width: "900px" }}
        >
          Top categories
        </Typography>
      </Grid>
      <Grid sx={{ marginTop: "2%", marginBottom: "3%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {coti.map((card, index) => (
            <Catigor key={index} card={card} />
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Herocard;
