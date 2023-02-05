import * as React from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import datas from "./Datas";
import { Link } from "react-router-dom";
const Beach = ({ ner }) => {
  const filteredData = datas.filter((data) => data.category === ner);
  return (
    <Grid>
      <Typography
        variant="h4"
        sx={{
          color: "white",
          fontWeight: "700",
          width: "900px",
          marginBottom: "4%",
        }}
      >
        Your Non-Stop Flight To Better Travel
      </Typography>

      <Grid sx={{ display: "flex", gap: "2%" }}>
        {filteredData.map((filterData, index) => (
          <Link to={"/Anothermain/" + filterData.id}>
            <Grid
              sx={{
                padding: "20px ",
                borderRadius: "16px",
                boxShadow: "0px 4px 16px rgba(158, 158, 158, 0.25)",
                background: "#FFFFFF",
              }}
            >
              <Box sx={{ marginBottom: "4%" }}>
                <img
                  src={`${filterData.imageURL}`}
                  alt=""
                  width={350}
                  height={310}
                />
              </Box>
              <Box>
                <Box
                  sx={{
                    color: "dark",
                    fontSize: "28px",
                  }}
                >
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box> {filterData.ner}</Box>

                    <Box>
                      <StarIcon />
                      {filterData.rating}
                    </Box>
                  </Box>

                  <Box
                    sx={{ opacity: 0.5, fontSize: "18px", marginBottom: "5%" }}
                  >
                    {filterData.time}
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    opacity: "0.5",
                    textAlign: "center",
                    marginBottom: "5%",
                  }}
                >
                  <Box>
                    <img
                      src={`${filterData.minimapURL}`}
                      alt=""
                      width={30}
                      height={30}
                    />
                    <Box sx={{ color: "black" }}>{filterData.minimapname}</Box>
                  </Box>
                  <Box>
                    <img
                      src={`${filterData.minimaptwoURL}`}
                      alt=""
                      width={30}
                      height={30}
                    />
                    <Box sx={{ color: "black" }}>
                      {filterData.minimapnametwo}
                    </Box>
                  </Box>
                  <Box>
                    <img
                      src={`${filterData.minimapthreeURL}`}
                      alt=""
                      width={30}
                      height={30}
                    />
                    <Box sx={{ color: "black" }}>
                      {filterData.minimapnamethree}
                    </Box>
                  </Box>
                  <Box>
                    <img
                      src={`${filterData.minimaptourURL}`}
                      alt=""
                      width={30}
                      height={30}
                    />
                    <Box sx={{ color: "black" }}>
                      {filterData.minimapnamefour}
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    opacity: "0.5",
                    fontSize: "18px",
                    marginBottom: "5%",
                  }}
                >
                  <li>{filterData.typeone}</li>
                  <li>{filterData.typetwo}</li>
                  <li>{filterData.typethree}</li>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    gap: "20% ",
                  }}
                >
                  <Box>{filterData.typefour}</Box>
                  <Box
                    sx={{
                      display: "flex",
                    }}
                  >
                    <Box sx={{ fontSize: "24px", fontWeight: "700" }}>
                      {filterData.typefive}
                    </Box>
                    <Box sx={{ opacity: "0.5", marginTop: "7%" }}>
                      {filterData.typesix}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Link>
        ))}
      </Grid>
    </Grid>
  );
};
export default Beach;
