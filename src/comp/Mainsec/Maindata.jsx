import { Box, Grid } from "@mui/material";
const Maindata = ({ card }) => {
  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        zIndex: "2",
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
export default Maindata;
