import React, { useEffect } from "react";
import Card from "@mui/material/Card";

import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";

import { CircularProgress, List, ListItem } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { listPosts } from "../actions/postsAction";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const ImageModal = () => {
  // const { item } = props;
  const dispatch = useDispatch();
  const item = useSelector((state) => state.posts.posts);
  const {loading} = useSelector((state)=>state.posts)
  console.log(item);
  const openVal = useSelector((state) => state.openList);
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  useEffect(() => {
    dispatch(listPosts(openVal));
    console.log(openVal);
  }, [dispatch]);

  return (
    <>
    {loading? (
      <>
      <CircularProgress sx={{marginTop:'20%', marginLeft:'45%'}}/>
      </>
    ) :(

      <Card
      className="card_modal"
      sx={{
        mx: "auto",
        borderRadius: "20px",
        background: isDarkMode ? "black" : "white",
        height: 600,
        width: 560,
      }}
      >
        <Box
          sx={{
            display: "flex",
            py: "10px",
            justifyContent: "space-between",
            px: "20px",
          }}
          >
          <div style={{ display: "flex" }}>
            <div style={{ marginLeft: "10px" }}>
              <Typography
                sx={{
                  color: isDarkMode ? "#E5E5E5" : "#4F4F4F",
                  fontWeight: "600",
                }}
                >
                {item.title ? item.title : ""}
              </Typography>
              <Typography
                variant="body"
                sx={{ color: "#A7A7A7", fontStyle: "italic" }}
                >
                Points: {item.points}
              </Typography>
            </div>
          </div>
        </Box>
        <Box>
          <Typography sx={{ fontWeight: "700", padding: "10px" }}>
            Comments-
          </Typography>
          <List
            sx={{
              width: "100%",
              maxHeight: 560,
              // maxWidth: 460,
              bgcolor: "background.paper",
              position: "relative",
              overflow: "scroll",
              overflowWrap: "anywhere",
              // '& ul': { padding: 0 },
            }}
            // subheader={<li />}
            >
            {item.children?.map((it) => (
              <>
                <ListItem component="div" disablePadding>
                  <ListItemButton sx={{ display: "block" }}>
                    <Typography sx={{ fontStyle: "italic", color: "gray" }}>
                      {it.author}
                    </Typography>

                    <ListItemText primary={it.text} />
                  </ListItemButton>
                </ListItem>
              </>
            ))}
          </List>
        </Box>
        {/* </Box> */}
      </Card>
            )}
    </>
  );
};

export default ImageModal;
