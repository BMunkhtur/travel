import { Box, Grid } from "@mui/material";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { borders } from "@mui/system";
const Cardmainmap = ({ card }) => {
  return (
    <Card sx={{ width: "100%", padding: "20px", display: "flex", gap: "20px" }}>
      <Grid>
        <img src={`${card.imageURL}`} alt="" width={500} />
      </Grid>
      <Grid
        sx={{
          display: "flex",
          gap: "30px",
          flexDirection: "column",
        }}
      >
        <Box> {card.type}</Box>
        <Box sx={{ fontSize: "24px", fontWeight: "700" }}> {card.ner}</Box>
        <Box> {card.text}</Box>
        <Button
          sx={{
            borderRadius: "40px",
            backgroundColor: "blue",
            width: "15vh",
            height: "20%",
            padding: "5%",
            marginTop: "1%",
            fontSize: "15px",
            fontWeight: "400",
          }}
          color="info"
        >
          Book now
        </Button>
      </Grid>
    </Card>
  );
};
export default Cardmainmap;
