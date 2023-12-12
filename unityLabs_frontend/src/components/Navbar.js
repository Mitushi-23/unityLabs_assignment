import React from "react";
import { Container, Switch, Typography, Box } from "@mui/material";
import SearchField from "./Searchfield";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../actions/darkModeAction";
import { useNavigate } from "react-router-dom";

const label = { inputProps: { "aria-label": "Switch demo" } };

const Navbar = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  const handleToggle = () => {
    dispatch(toggleDarkMode());
  };
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <Container
        maxWidth="xl"
        sx={{ py: 3 }}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <Typography
          style={{
            fontWeight: 700,
            fontSize: "30px",
            fontFamily: "'Pattaya', sans-serif",
            color: isDarkMode ? "white" : "inherit",
          }}
          onClick={handleClick}
        >
          Image Gallery
        </Typography>
        <Box>
          <SearchField />
        </Box>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            gap: "50px",
            color: isDarkMode ? "white" : "inherit",
          }}
        >
          <Typography
            style={{ fontWeight: 700, fontFamily: "'Montserrat', sans-serif" }}
          >
            Explore
          </Typography>
          <Typography
            style={{ fontWeight: 700, fontFamily: "'Montserrat', sans-serif" }}
          >
            Collection
          </Typography>
          <Typography
            style={{ fontWeight: 700, fontFamily: "'Montserrat', sans-serif" }}
          >
            Community
          </Typography>
        </Box>
        <Typography
          style={{
            display: "flex",
            alignItems: "center",
            fontWeight: 700,
            fontFamily: "'Montserrat', sans-serif",
            color: isDarkMode ? "white" : "inherit",
          }}
        >
          {!isDarkMode ? "Dark Mode" : "Light Mode"}
          <Switch {...label} onChange={handleToggle} />
        </Typography>
      </Container>
    </>
  );
};

export default Navbar;
