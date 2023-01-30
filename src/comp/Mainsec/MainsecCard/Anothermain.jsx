import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  Button,
  Link,
  Rating,
} from "@mui/material";
import CommuteIcon from "@mui/icons-material/Commute";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BusinessIcon from "@mui/icons-material/Business";
import SubwayIcon from "@mui/icons-material/Subway";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CoffeeIcon from "@mui/icons-material/Coffee";
import DirectionsRailwayIcon from "@mui/icons-material/DirectionsRailway";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  width: 200,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 100 : 200],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

const Anothermain = () => {
  return (
    <Card
      sx={{
        marginLeft: "10%",
        marginRight: "10%",
        marginTop: "20%",
        marginBottom: "3%",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Box sx={{ display: "flex" }}>
            <Typography variant="h2">Orchard Hotel Singapore</Typography>
            <Rating />
            <Box>
              <Typography sx={{ color: "green", fontWeight: "bold" }}>
                Health Protected
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <LocationOnIcon />
            <Typography>Orchad, Road, Singapore, 238879, Singapore</Typography>
            <a href=""></a>
            <Typography sx={{ color: "blue", fontWeight: "bold" }}>
              Shop on map
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <BusinessIcon />
            <Typography>
              Winner of perstigious awards for accommodation experience, Orchad
              Hotel singapore
            </Typography>
            <Typography sx={{ color: "blue", fontWeight: "bold" }}>
              Show more
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <Box>
            <Typography variant="h5">US$204</Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <FavoriteIcon />
              <a href="">
                <Typography
                  sx={{
                    color: "green",
                    fontWeight: "bold",
                    textDecoration: "underline dotted",
                  }}
                >
                  We Price Match
                </Typography>
              </a>
            </Box>
          </Box>
          <Box>
            <Button
              sx={{
                background: "#00b0ff",
                height: "60px",
                width: "150px",
                fontWeight: "bold",
              }}
            >
              Select room
            </Button>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", borderRadius: "20px", gap: "20px" }}>
        <Box sx={{ width: "70%" }}>
          <img
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80"
            alt=""
            width={710}
            height={400}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            gap: "5px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "300px",
              height: "200px",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt=""
            />
            <img
              src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80"
              alt=""
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "300px",
              height: "200px",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt=""
            />
            <img
              src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80"
              alt=""
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "300px",
              height: "200px",
              gap: "5px",
              flexDirection: "column",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt=""
            />
            <Box>
              <Box>
                <img
                  src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80"
                  alt=""
                  width={300}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          height: "120px",
          gap: "20px",
        }}
      >
        <Card
          sx={{
            display: "flex",
            gap: "80px",
            padding: "15px",
            backgroundColor: "#eeeeee",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <Box
              sx={{
                display: "flex",
                width: "300px",
                gap: "20px",
              }}
            >
              <Button
                sx={{
                  background: "blue",
                  height: "30px",
                  width: "20px",
                }}
              >
                4.3/5
              </Button>
              <Typography>382 reviews</Typography>
            </Box>
            <Box>
              <Typography>382 Great service</Typography>
              <Typography>95% Recommended</Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>Great service</Typography>
                <Typography>4.2</Typography>
              </Box>
              <BorderLinearProgress variant="determinate" value={60} />
            </Box>
            <Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>Great service</Typography>
                <Typography>4.5</Typography>
              </Box>
              <BorderLinearProgress variant="determinate" value={70} />
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>Great service</Typography>
                <Typography>4.8</Typography>
              </Box>
              <BorderLinearProgress variant="determinate" value={50} />
            </Box>
            <Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>Great service</Typography>
                <Typography>4.9</Typography>
              </Box>

              <BorderLinearProgress variant="determinate" value={60} />
            </Box>
          </Box>
        </Card>
        <Button
          sx={{
            width: "360px",
            backgroundColor: "#eeeeee",
            textTransform: "capitalize",
          }}
        >
          <a href="https://www.google.com/maps">
            <Box sx={{ display: "flex", textDecoration: "underline dotted" }}>
              <LocationOnIcon />
              <Typography>10 places of interest within 100....</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                textDecoration: "underline dotted",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <AirplanemodeActiveIcon />
                <Typography>26.5km</Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <DirectionsRailwayIcon />
                <Typography>1.4km</Typography>
              </Box>

              <Box sx={{ display: "flex" }}>
                <SubwayIcon />
                <Box>400m</Box>
              </Box>
            </Box>
            <Box
              sx={{ display: "flex", margin: "13% 0% 0% 60%", color: "blue" }}
            >
              <a href="">
                <Typography sx={{ color: "blue", fontWeight: "bold" }}>
                  Map
                </Typography>
              </a>
              <ArrowForwardIosIcon />
            </Box>
          </a>
        </Button>
        <Button
          sx={{
            width: "350px",
            backgroundColor: "#eeeeee",
            textTransform: "capitalize",
          }}
        >
          <a
            href="https://www.google.com/maps
          "
          >
            <Box sx={{ display: "flex", textDecoration: "underline dotted" }}>
              <CommuteIcon />
              <Box>Airport pick-up service</Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "20px",
                textDecoration: "underline dotted",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <RestaurantIcon />
                <Typography>Restaurant</Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <CoffeeIcon />
                <Typography>Cafe</Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <LocalBarIcon />
                <Typography>Bar</Typography>
              </Box>
            </Box>
            <Box
              sx={{ display: "flex", margin: "15% 0% 0% 30%", color: "blue" }}
            >
              <a href="">
                <Typography sx={{ color: "blue", fontWeight: "bold" }}>
                  Show All Amenities
                </Typography>
              </a>
              <ArrowForwardIosIcon />
            </Box>
          </a>
        </Button>
      </Box>
    </Card>
  );
};

export default Anothermain;
