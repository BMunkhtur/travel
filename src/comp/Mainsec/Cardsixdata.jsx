import { Box, Grid } from "@mui/material";
import { Typography, Card } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
const Cardsixdata = ({ card }) => {
  return (
    <Card
      sx={{
        padding: "20px ",

        zIndex: "5",
      }}
    >
      <Box sx={{ marginBottom: "4%" }}>
        <img src={`${card.imageURL}`} alt="" width={360} height={310} />
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
    </Card>
  );
};
export default Cardsixdata;
