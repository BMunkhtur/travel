import React from "react";
import { Grid } from "@mui/material";

const Boxshadow = () => {
  return (
    <Grid
      sx={{
        width: "100%",
        position: "absolute",
        bottom: "-18% ",
        zIndex: "-",
        height: "28%",
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 50.0%)",
      }}
    ></Grid>
  );
};

export default Boxshadow;
