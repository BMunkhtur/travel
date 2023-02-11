import React from "react";
import { Grid } from "@mui/material";
import SearchInput from "./Searchinput/Searchinput";
import Herocard from "./Herocard/Herocard";
import Imagecard from "./Herocard/Imagecard";
import { Container } from "@mui/system";
import Cateories from "../test/Categories";
import datas from "../test/Datas";
import { useState } from "react";
const Herosec = ({ isCategor, setIsCategor }) => {
  const [catList, setCatList] = useState(datas);
  const handleChange = (e) => {
    console.log(e.target.value);
    const chnge = datas.filter((book) =>
      book.category.toLowerCase().includes(e.target.value)
    );
    console.log(chnge);
    setCatList(chnge);
  };
  let a = <Imagecard />;
  if (isCategor == "All") {
    a = <Imagecard datas={catList} />;
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
        <SearchInput handleChange={handleChange} />
        <Herocard setIsCategor={setIsCategor} />
      </Container>
      <Grid sx={{ marginLeft: "11%" }}> {a}</Grid>
    </Grid>
  );
};
export default Herosec;
