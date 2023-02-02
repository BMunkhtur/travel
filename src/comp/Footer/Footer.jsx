import React from "react";
import { Box, Typography, Button, Grid, Container } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Footerdata = ({ card }) => {
  return (
    <Box>
      <Typography sx={{ marginBottom: "10%" }}> {card.rowone}</Typography>
      <Typography sx={{ marginBottom: "10%" }}>{card.rowtwo}</Typography>
      <Typography sx={{ marginBottom: "10%" }}> {card.rowthree}</Typography>
      <Typography sx={{ marginBottom: "10%" }}> {card.rowfour}</Typography>
      <Typography sx={{ marginBottom: "10%" }}> {card.rowfive}</Typography>
    </Box>
  );
};
const Footer = () => {
  const footdata = [
    {
      rowone: "",
      rowtwo: "",
      rowthree: "",
      rowfour: "",
      rowfive: "",
    },
    {
      rowone: "Seslendirme ve Alt Jazz",
      rowtwo: "Media Market",
      rowthree: "Gillie",
      rowfour: "Size Last",
      rowfive: "",
    },
    {
      rowone: "Self Betimes",
      rowtwo: "Yatırımcı İlişkileri",
      rowthree: "Basal Himmler",
      rowfour: "",
      rowfive: "",
    },
    {
      rowone: "Yard Market",
      rowtwo: "Is İmkanları",
      rowthree: "Car Tercihleri",
      rowfour: "",
      rowfive: "",
    },
    {
      rowone: "Hedge Karla",
      rowtwo: "Mullein Koşulları",
      rowthree: "Autumnal Bulgier",
      rowfour: "",
      rowfive: "",
    },
  ];
  return (
    <Box
      sx={{
        background: "#141414",
        height: "100%",
        width: "100%",
      }}
    >
      <Container>
        <Box>
          <Box>
            <Grid
              sx={{
                color: "white",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: "10%",
                  opacity: "0.5",
                  padding: "5%",
                }}
              >
                <Typography
                  sx={{ fontSize: "48px", color: "white", opacity: "1" }}
                >
                  Trxvl.
                </Typography>
                {footdata.map((card, index) => (
                  <Footerdata key={index} card={card} />
                ))}
              </Box>

              <Button
                variant="outlined"
                sx={{
                  color: "white",
                  textTransform: "capitalize",
                  height: "1%",
                  fontSize: "18px",
                  marginLeft: "33%",
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    opacity: "0.5",
                  }}
                >
                  Helmet KOD
                </Typography>
              </Button>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "white",
                  opacity: "1",
                  marginLeft: "33%",
                  marginTop: "1%",
                  opacity: "0.5",
                }}
              >
                © 1997-2021 Netflix, Inc. i-062d573a0ee099242
              </Typography>

              <Box
                sx={{
                  color: "white",
                  opacity: "0.5",
                  display: "flex",
                  gap: "20px",
                  marginLeft: "80%",
                }}
              >
                <FacebookIcon />
                <InstagramIcon />
                <TwitterIcon />
                <YouTubeIcon />
              </Box>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
