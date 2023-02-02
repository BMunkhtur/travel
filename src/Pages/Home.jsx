import React from "react";
import { Grid } from "@mui/material";
import { useState } from "react";
import Herosec from "../comp/Herosec/Herosec";
import Mainsec from "../comp/Mainsec/Mainsec";
import Detail from "./Detail";
const Home = ({ changeMode }) => {
  const [isCategor, setIsCategor] = useState("All");
  let mainsec = "";
  if (isCategor == "All") {
    mainsec = <Mainsec />;
  } else {
    mainsec = <Detail />;
  }
  return (
    <Grid>
      <Herosec isCategor={isCategor} setIsCategor={setIsCategor} />
      {mainsec}
    </Grid>
  );
};

export default Home;
