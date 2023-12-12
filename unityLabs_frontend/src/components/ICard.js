import React, { useEffect, useRef, useState } from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import searchPhotos from "../actions/photoActions";
import { useNavigate } from "react-router-dom";
import { toggleOpenList } from "../actions/openListAction";

export default function ICard() {
  const openVal = useSelector((state) => state.openList);

  const [open, setOpen] = React.useState(openVal);
  console.log(openVal)
  const [selectedItem, setSelectedItem] = useState([]);

  const navigate = useNavigate();

  const handleOpen = (item) => {
    // setSelectedItem(item);
    dispatch(toggleOpenList(item.story_id))
    // console.log(item.story_id)
    navigate("/result");
  };

  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();

  const photoList = useSelector((state) => state.photos);
  let { photos } = photoList;
  const query = useSelector((state) => state.search_query.query_value);

  const postList = useSelector((state) => state.posts.posts);
  console.log(postList);

  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  useEffect(() => {
   
    dispatch(searchPhotos(query));
  }, [dispatch]);

  return (
    <Container maxWidth="xl" sx={{ paddingTop: "50px" }}>
      <ImageList className="image_list" variant="masonry">
        {photos?.map((item) => (
          <ImageListItem key={item.story_id}>
            <Card
              onClick={() => handleOpen(item)}
              sx={{
                mx: "auto",
                borderRadius: "10px",
                background: isDarkMode ? "black" : "aliceblue",
                marginBottom: "20px",
                cursor:'pointer'
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  p: "20px",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ marginLeft: "10px" }}>
                  <Typography
                    sx={{
                      color: isDarkMode ? "#E5E5E5" : "#4F4F4F",
                      fontWeight: "600",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body"
                    sx={{ color: "#A7A7A7", fontStyle: "italic" }}
                  >
                    Author: {item.author}
                  </Typography>
                </div>
              </Box>
            </Card>
          </ImageListItem>
        ))}
      </ImageList>
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          pt: "6%",
        }}
      >
        <ImageModal item={selectedItem} />
      </Modal> */}
    </Container>
  );
}
