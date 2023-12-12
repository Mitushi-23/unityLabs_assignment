import React, { useEffect, useState } from "react";
import ICard from "../components/ICard";
import Box from "@mui/material/Box";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import Nav from "../components/Nav";

const Main = () => {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1200);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box sx={{ background: isDarkMode ? "#232323" : "inherit" }}>
      {isSmallScreen ? <Nav /> : <Navbar />}
      <Header />
      <ICard />
    </Box>
  );
};

export default Main;
