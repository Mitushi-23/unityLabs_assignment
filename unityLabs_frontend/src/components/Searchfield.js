import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { searchPhotos } from "../actions/photoActions";
import ClearIcon from "@mui/icons-material/Clear";
import { useState, useEffect } from "react";
import { searchQuery } from "../actions/searchQueryAction";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  zIndex: "1",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    backgroundColor: "#ECECEC",
    borderRadius: "6px",
    [theme.breakpoints.up("sm")]: {
      width: "40ch",
      "&:focus": {
        width: "45ch",
      },
    },
  },
}));

const SearchField = () => {
  const dispatch = useDispatch();
  const photoList = useSelector((state) => state.photos);
  const query = useSelector((state) => state.search_query.query_value);

  const { loading, error, photos } = photoList;

  const handleSearch = (query) => {
    dispatch(searchPhotos(query));
    dispatch(searchQuery(query));
  };

  const handleClose = (e) => {
    e.preventDefault();
    dispatch(searchQuery(""));
  };

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
    <>
      <div>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder={query ? query : "Search…"}
            inputProps={{ "aria-label": "search" }}
            onChange={(e) => handleSearch(e.target.value)}
          />
          {query && (
            <ClearIcon
              sx={{ color: isDarkMode ? "#E5E5E5" : "#4F4F4F" }}
              onClick={handleClose}
            />
          )}
        </Search>
      </div>
    
    </>
  );
};

export default SearchField;
