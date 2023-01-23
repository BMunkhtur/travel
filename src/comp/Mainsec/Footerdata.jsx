import { Box, Grid } from "@mui/material";
import { Typography, Card } from "@mui/material";
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
export default Footerdata;
