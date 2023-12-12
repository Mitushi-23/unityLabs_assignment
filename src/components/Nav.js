import React from "react";
import { Container, Switch, Typography, Box, Menu } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../actions/darkModeAction";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const label = { inputProps: { "aria-label": "Switch demo" } };

const Nav = () => {
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
          <SearchIcon />
          <MenuIcon />
        </Box>
      </Container>
    </>
  );
};

export default Nav;
