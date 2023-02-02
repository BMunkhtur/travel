import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import datas from "./Datas";

const Beach = ({ ner }) => {
  // const { id } = useParams();
  const filteredData = datas.filter((data) => data.category === ner);
  return (
    <Grid sx={{ display: "flex", gap: "1rem", margin: "10%" }}>
      {filteredData.map((filterData, index) => (
        <Card key={index} sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140, width: 400 }}
            image={filterData.imgUTL}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {filterData.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {filterData.bairsgil}
            </Typography>
          </CardContent>
          <CardActions>
            <Link to={"/Anothermain/" + filterData.id}>{filterData.tovch}</Link>
          </CardActions>
        </Card>
      ))}
    </Grid>
  );
};

export default Beach;
