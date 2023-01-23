import React from "react";
import { Box, Grid, Typography, Button, Toolbar, styled } from "@mui/material";
import InputBase from "@mui/material/InputBase";

const Mainfour = () => {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    width: "100%",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    "& .MuiInputBase-input": {
      color: "white",
    },
  }));
  return (
    <Grid
      sx={{
        background: "url(/pic/34.png) no-repeat ",
        backgroundSize: "cover",

        height: "56vh",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "0",
          display: "flex",
          padding: "5% 0% 0% 15%",
        }}
      >
        <Box sx={{ marginRight: "5%" }}>
          <img src="/pic/37.png" alt="" />
        </Box>
        <Box sx={{ width: "60%" }}>
          <Typography
            sx={{ fontSize: "48px", fontWeight: "700", color: "white" }}
          >
            {" "}
            Your all-in-one travel app.
          </Typography>
          <Typography
            sx={{ fontSize: "24px", fontWeight: "400", color: "white" }}
          >
            Book flights, hotels, trains & rental cars anywhere in the world in
            just seconds. Get real-time flight updates, travel info, exclusive
            deals, and 30% more Trip Coins only on the app!
          </Typography>
          <Box sx={{ display: "flex", marginTop: "5%" }}>
            <Grid>
              {" "}
              <Box
                sx={{
                  margin: "5% 0% 3% 0%",
                }}
              >
                <Button
                  sx={{
                    borderRadius: "40px",
                    background: "rgba(255, 255, 255, 0.4);",
                    width: "25%",
                    color: "white",
                    height: "1%",
                    fontSize: "18px",
                    fontWeight: "400",
                    marginRight: "5%",
                    textTransform: "capitalize",
                  }}
                >
                  Mobile
                </Button>
                <Button
                  sx={{
                    borderRadius: "40px",
                    color: "white",
                    width: "25%",
                    height: "1%",
                    fontSize: "18px",
                    fontWeight: "400",
                    textTransform: "capitalize",
                  }}
                >
                  Email
                </Button>
              </Box>
              <Box>
                <Typography
                  sx={{ fontSize: "14px", fontWeight: "400", color: "white" }}
                >
                  Enter your phone number to receive a text with a link to
                  download the app.
                </Typography>
              </Box>
              <Box>
                <Grid
                  position="static"
                  sx={{
                    background: "rgba(255, 255, 255, 0.4);",
                    borderRadius: "20px",
                    backdropFilter: "blur(15px)",
                    marginTop: "2%",
                    width: "100%",
                  }}
                >
                  <Toolbar>
                    <Search>
                      <Box
                        sx={{
                          width: "100%",
                          flexDirection: "row",
                          display: "flex",
                          gap: "30%",
                        }}
                      >
                        <StyledInputBase
                          placeholder="+91 Mobile number"
                          inputProps={{ "aria-label": "search" }}
                        />{" "}
                        <Button
                          sx={{
                            borderRadius: "40px",
                            backgroundColor: "white",
                            width: "45%",
                            height: "1%",
                            fontSize: "18px",
                            fontWeight: "400",
                            textTransform: "capitalize",
                          }}
                          color="primary"
                        >
                          Search
                        </Button>
                      </Box>
                    </Search>
                  </Toolbar>
                </Grid>
              </Box>
            </Grid>

            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginLeft: "20px",
              }}
            >
              <Box
                sx={{
                  width: "50px",
                  height: "0",
                  border: "1px solid #C4C4C4",
                  margin: "3px",
                  display: "inline-block",
                  rotate: "90deg",
                  marginBottom: "30px",
                  marginTop: "40px",
                  opacity: "0.2",
                }}
              ></Box>
              <Box>
                <Typography sx={{ display: "inline-block", color: "white" }}>
                  or
                </Typography>
              </Box>

              <Box
                sx={{
                  width: "50px",
                  height: "0",
                  border: "1px solid #C4C4C4",
                  margin: "3px",
                  display: "inline-block",
                  rotate: "90deg",
                  marginTop: "30px",
                  opacity: "0.2",
                }}
              ></Box>
            </Grid>
            <Box>
              <Box sx={{ marginBottom: "40px" }}>
                <img src="/pic/35.png" alt="" />
              </Box>

              <img src="/pic/36.png" alt="" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default Mainfour;
