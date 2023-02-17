import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import axios from "axios";
const Herocard = ({ filterData, setIsCategor }) => {
  const [categories, setCategories] = useState([]);
  const fetchgories = async () => {
    try {
      const res = await axios.get("http://localhost:8000/data/categories");
      setCategories(res.data.data.categories);
      console.log(res.data.data.categories);
    } catch (err) {}
  };
  useEffect(() => {
    fetchgories();
  }, []);

  const Catigor = ({ card }) => {
    return (
      <NavLink>
        <Box
          onClick={() => {
            setIsCategor(card.ner);
          }}
          sx={{
            display: "block",
            textAlign: "center",
            width: "100%",
          }}
        >
          <img src={`${card.imageURL}`} alt="" width={50} />
          <Box
            sx={{
              opacity: "0.4",
              color: "white",
              "&:hover": { opacity: "1" },
            }}
          >
            {card.ner}
          </Box>
        </Box>
      </NavLink>
    );
  };

  return (
    <Grid>
      <Grid sx={{ marginBottom: "3%" }}>
        <Typography
          variant="h3"
          sx={{ color: "white", fontWeight: "700", width: "900px" }}
        >
          Top categories
        </Typography>
      </Grid>
      <Grid sx={{ marginTop: "2%", marginBottom: "3%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {categories.map((card, index) => (
            <Catigor key={index} card={card} />
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Herocard;
