import React from "react";
import { Container, Grid, Typography } from "@mui/material";

const Maintitle = () => {
  return (
    <Grid sx={{ marginBottom: "3%" }}>
      <Typography
        variant="h3"
        sx={{ color: "white", fontWeight: "700", width: "900px" }}
      >
        Top categories
      </Typography>
    </Grid>
  );
};

export default Maintitle;
