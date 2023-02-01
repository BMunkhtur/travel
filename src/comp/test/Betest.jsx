import React from "react";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import datas from "./Datas";
import Beach from "./Categories";
const Categories = () => {
  const { id } = useParams();
  console.log(id);
  const filteredData = datas.filter((datas) => datas.category === id);
  return (
    <Grid sx={{ width: "100%", height: "100vh" }}>
      <Beach filteredData={filteredData} />
    </Grid>
  );
};
export default Categories;
