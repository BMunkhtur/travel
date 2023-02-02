import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Grid, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import datas from "./Datas";
const Beach = ({ ner }) => {
  const filteredData = datas.filter((data) => data.category === ner);
  return (
    <Grid sx={{ display: "flex", gap: "2%" }}>
      {filteredData.map((filterData, index) => (
        <Card
          key={index}
          sx={{ width: "420px", borderRadius: "20px", padding: "20px" }}
        >
          <CardMedia
            sx={{ height: 280, width: "100%", borderRadius: "20px" }}
            image={filterData.imgUTL}
            title="green iguana"
          />
          <Box>
            <Typography gutterBottom variant="h5" component="div">
              {filterData.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {filterData.bairsgil}
            </Typography>
          </Box>
          <Box>
            <Link to={"/Anothermain/" + filterData.id}>{filterData.tovch}</Link>
          </Box>
        </Card>
      ))}
    </Grid>
  );
};

export default Beach;
