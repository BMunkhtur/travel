import React from "react";
import { Grid, Typography } from "@mui/material";
const Plan = () => {
  return (
    <Grid>
      <Grid
        sx={{
          marginTop: "3%",
          position: "relative",
        }}
      >
        <img src="/pic/29.png" alt="" width="95%" />
        <Typography
          sx={{
            color: "white",
            position: "absolute",
            top: "0",
            padding: "100px",
            color: "white",
            fontWeight: "600",
            width: "800px",
            fontSize: "50px",
          }}
        >
          Plan your trip with travel expert
        </Typography>
        <Typography
          sx={{
            color: "white",
            position: "absolute",
            top: "30%",
            padding: "100px",
            color: "white",
            fontSize: "40px",
          }}
        >
          Our professional advisors can craft your perfect itinerary
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Plan;
