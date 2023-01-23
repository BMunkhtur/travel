import { Box, Grid } from "@mui/material";
const ImgCard = ({ card }) => {
  return (
    <Box
      sx={{
        width: "100%",
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
  );
};
export default ImgCard;
