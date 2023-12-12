import "./App.css";
import Main from "./Pages/Main";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Result from "./Pages/Result";
import { Box } from "@mui/material";

const App = () => {
  return (
    <Box sx={{ minHeight: "100%" }}>
      <Router>
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/result" exact element={<Result />} />
        </Routes>
      </Router>
    </Box>
  );
};

export default App;
