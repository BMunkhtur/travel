import React from "react";
import { Grid } from "@mui/material";
import SearchInput from "./Searchinput/Searchinput";
import Herocard from "./Herocard/Herocard";
import Imagecard from "./Herocard/Imagecard";
import { Container } from "@mui/system";
import Cateories from "../test/Categories";
import { useState } from "react";
const Herosec = () => {
  let a = <Imagecard />;

  const [isCategor, setIsCategor] = useState(true);
  if (isCategor == true) {
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
        boxShadow: " 0px -200px 60px -50px rgba(255,255,255) inset",
      }}
    >
      <Container maxWidth="xl">
        <SearchInput />
        <Herocard setIsCategor={setIsCategor} />
        {a}
        {/* <Imagecard />
        <Cateories /> */}
      </Container>
    </Grid>
  );
};

export default Herosec;
