import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import Nav from "../components/Nav";
import ImageModal from "../components/ImageModal";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Result = () => {
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

  const navigate = useNavigate();

  const handlenavigate = ()=>{
    navigate("/")
  }

  return (
    <Box sx={{ background: isDarkMode ? "#232323" : "inherit"}}>
      {isSmallScreen ? <Nav /> : <Navbar />}
      <ArrowBack sx={{position:'fixed', left:'20%', top:'15%',cursor:'pointer'}} onClick={handlenavigate} />
      <ImageModal/>
    </Box>
  );
};

export default Result;
