import { Box } from "@mui/material";
import { Typography, Card } from "@mui/material";
const Cardthree = ({ card }) => {
  return (
    <Card
      sx={{
        padding: "20px ",
        width: "390px",
      }}
    >
      <Box>
        <img src={`${card.imageURL}`} alt="" width={350} height={310} />
        <Box
          sx={{
            color: "dark",
            fontSize: "28px",
          }}
        >
          {card.ner}
        </Box>
        <Box
          sx={{
            opacity: "0.5",
          }}
        >
          <Typography> {card.type}</Typography>
          <Typography> {card.count}</Typography>
        </Box>
      </Box>
    </Card>
  );
};
export default Cardthree;
