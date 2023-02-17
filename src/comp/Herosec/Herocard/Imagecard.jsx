import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import axios from "axios";

const ImageCard = () => {
  const [imageCard, setImageCard] = useState([]);
  const imgCard = async () => {
    try {
      const res = await axios.get("http://localhost:8000/imageCard");
      setImageCard(res.data.imageCard);
    } catch (err) {}
  };
  useEffect(() => {
    imgCard();
  }, []);
  const ImgCard = ({ card }) => {
    return (
      <Grid>
        <Box
          sx={{
            position: "relative",
            borderRadius: "20px",
          }}
        >
          <img src={`${card.imageURL}`} alt="" width={420} height={310} />
          <Box
            sx={{
              color: "dark",
              position: "absolute",
              top: "75%",
              left: "10%",
              color: "white",
              fontSize: "28px",
            }}
          >
            {card.ner}
          </Box>
        </Box>
      </Grid>
    );
  };
  return (
    <Grid>
      <Typography
        variant="h4"
        sx={{
          color: "white",
          fontWeight: "700",
          marginBottom: "2%",
        }}
      >
        Top Vacation Destinations
      </Typography>
      <Grid
        sx={{
          overflowX: "auto",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Box
          md={1}
          sx={{
            display: "flex",
            gap: "2% ",
            zIndex: "1",
          }}
        >
          {imageCard.map((card, index) => (
            <ImgCard key={index} card={card} />
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default ImageCard;
