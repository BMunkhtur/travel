import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import Button from "@mui/material/Button";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
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
      <Grid
        position="static"
        sx={{
          background: "rgba(255, 255, 255, 0.4);",
          borderRadius: "40px",
          backdropFilter: "blur(15px)",
          marginBottom: "3%",
        }}
      >
        <Toolbar>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>

            <Box
              sx={{
                width: "100%",
                flexDirection: "row",
                display: "flex",
                gap: "10%",
              }}
            >
              <StyledInputBase
                placeholder="Search destinations, hotels"
                inputProps={{ "aria-label": "search" }}
              />{" "}
              <Box
                sx={{
                  marginTop: "2%",
                  color: "white",
                }}
              >
                <Typography>
                  {" "}
                  <CalendarTodayIcon /> Check in
                </Typography>
              </Box>
              <Box sx={{ marginTop: "2%", color: "white" }}>
                <Typography>
                  {" "}
                  <CalendarTodayIcon /> Check out
                </Typography>
              </Box>
              <Box sx={{ marginTop: "2%", color: "white" }}>
                <Typography>
                  {" "}
                  <PersonIcon /> 1 room, 2 adultst
                </Typography>
              </Box>
              <Button
                sx={{
                  borderRadius: "40px",
                  backgroundColor: "white",
                  width: "15%",
                  height: "1%",
                  padding: "1%",
                  marginTop: "1%",
                  fontSize: "18px",
                  fontWeight: "400",
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
  );
}
