import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import Button from "@mui/material/Button";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarToday";
import { Grid } from "@mui/material";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  marginLeft: 0,
  width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  color: "white",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    color: "white",
    padding: theme.spacing(4, 4, 4, 0),
    paddingLeft: `calc(1em + ${theme.spacing(5)})`,
  },
}));

export default function SearchInput() {
  return (
    <Box>
      <Grid sx={{ marginBottom: "2%" }}>
        <Typography
          sx={{
            color: "white",
            fontWeight: "600",
            width: "600px",
            fontSize: "64px",
            height: "300px",
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          The whole world awaits.
        </Typography>
      </Grid>
      <Grid
        position="static"
        sx={{
          background: "rgba(255, 255, 255, 0.4);",
          borderRadius: "40px",
          backdropFilter: "blur(15px)",
          marginBottom: "3%",
          padding: { xs: "4px 0", md: "8px 16px" },
        }}
      >
        <Grid
          container
          sx={{
            alignItems: "center",
            height: "fit-content",
            display: "flex",
          }}
        >
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              minHeight: "36px",
              margin: { xs: "5px 0", md: "0" },
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
              backgroundColor: {
                xs: "rgba(255, 255, 255, 0.4)",
                md: "transparent",
              },
              borderRadius: { xs: "2rem", md: "none" },
            }}
          >
            <SearchIcon
              sx={{ color: "white", opacity: "0.7", alignSelf: "center" }}
            />
            <StyledInputBase
              sx={{
                minWidth: "300px",
              }}
              type="search"
              placeholder="Search destinations, hotels"
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              minHeight: "36px",
              margin: { xs: "5px 0", md: "0" },
              display: "flex",
              justifyContent: "space-around",
              backgroundColor: {
                xs: "rgba(255, 255, 255, 0.4)",
                md: "transparent",
              },
              borderRadius: { xs: "2rem", md: "none" },
            }}
          >
            <Grid sx={{ display: "flex", alignItems: "center" }}>
              <CalendarTodayOutlinedIcon
                sx={{ color: "white", opacity: "0.7" }}
              />
              <Typography sx={{ color: "white", opacity: "0.7" }}>
                Check in
              </Typography>
            </Grid>
            <Box
              sx={{
                fontSize: "20px",
                fontWeight: "lighter",
                color: "white",
                opacity: "0.7",
                display: { xs: "block", md: "none" },
              }}
            >
              &#124;
            </Box>
            <Grid sx={{ display: "flex", alignItems: "center" }}>
              <CalendarTodayOutlinedIcon
                sx={{ color: "white", opacity: "0.7" }}
              />
              <Typography sx={{ color: "white", opacity: "0.7" }}>
                Check out
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={2}
            sx={{
              minHeight: "36px",
              margin: { xs: "5px 0", md: "0" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: {
                xs: "rgba(255, 255, 255, 0.4)",
                md: "transparent",
              },
              borderRadius: { xs: "2rem", md: "none" },
            }}
          >
            <PersonIcon sx={{ color: "white", opacity: "0.7" }} />
            <Typography
              sx={{ lineHeight: "1rem", color: "white", opacity: "0.7" }}
            >
              1 room, 2 adults
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={2}
            sx={{ minHeight: "36px", margin: { xs: "5px 0", md: "0" } }}
          >
            <Button
              variant="contained"
              sx={{
                "&:hover": { color: "white" },
                color: "#2659C3",
                backgroundColor: "white",
                textTransform: "none",
                fontWeight: "bold",
                borderRadius: "2rem",
                width: "100%",
                boxShadow: "none",
              }}
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
