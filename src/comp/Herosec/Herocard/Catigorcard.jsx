import { Box, Button, Grid, Link } from "@mui/material";
const Coti = ({ card }) => {
  return (
    <Link href="/Detail">
      <Box
        sx={{
          display: "block",
          textAlign: "center",
          width: "100%",
        }}
      >
        <img src={`${card.imageURL}`} alt="" width={50} />
        <Box sx={{ opacity: "0.4", color: "white" }}>{card.ner}</Box>
      </Box>
    </Link>
  );
};
export default Coti;
