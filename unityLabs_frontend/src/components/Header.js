import { Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Search_feild from "./Searchfield";
import bg from "../assets/bg.jpg";

const Header = () => {

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
    <>
      <div
        style={{
          backgroundImage: `url(${bg})`,
          height: "384px",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Container
          sx={{
            py: "5%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign:'center'
          }}
        >
          <Typography
            variant="h4"
            sx={{ color: "white", fontWeight: "700", fontFamily: "Montserrat" }}
          >
            Download High Quality Images by Creators
          </Typography>
          <Typography
            my={1}
            sx={{ color: "#C4C4C4", fontFamily: "Montserrat" }}
          >
            Over 2.4 million+ stock Images by our talented community
          </Typography>
          {isSmallScreen &&
          <Search_feild />
          }
        </Container>
      </div>
    </>
  );
};

export default Header;
