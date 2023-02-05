import React from "react";
import { Grid } from "@mui/material";
import SearchInput from "./Searchinput/Searchinput";
import Herocard from "./Herocard/Herocard";
import Imagecard from "./Herocard/Imagecard";
import { Container } from "@mui/system";
import Cateories from "../test/Categories";
const Herosec = ({ isCategor, setIsCategor }) => {
  let a = <Imagecard />;
  if (isCategor == "All") {
    a = <Imagecard />;
  } else {
    a = <Cateories ner={isCategor} />;
  }
  return (
    <Grid
      sx={{
        background: "url(/pic/1.png) no-repeat  ",
        backgroundBlendMode: "color-burn",
        backgroundSize: "cover",
        width: "100%",
        height: "100%",
        zIndex: "-100 ",
        boxShadow: " 0px -200px 60px -50px rgba(240,255,255) inset",
      }}
    >
      <Container maxWidth="xl">
        <SearchInput />
        <Herocard setIsCategor={setIsCategor} />
      </Container>
      <Grid sx={{ marginLeft: "11%" }}> {a}</Grid>
    </Grid>
  );
};
export default Herosec;
