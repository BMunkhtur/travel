import React from "react";
import { Container, Grid, Typography } from "@mui/material";

const Herotitle = () => {
  return (
    <Grid sx={{ marginBottom: "2%" }}>
      <Typography
        sx={{
          color: "white",
          fontWeight: "600",
          width: "600px",
          fontSize: "64px",
        }}
      >
        The whole world awaits.
      </Typography>
    </Grid>
  );
};

export default Herotitle;
