import {
  POSTS_FAILS,
  POSTS_REQUEST,
  POSTS_SUCCESS,
} from "../constants/postsConstant";
import axios from "axios";

export const listPosts = (objectId) => async (dispatch) => {

  try {
    dispatch({ type: POSTS_REQUEST });
    const { data } = await axios.get(
      `http://hn.algolia.com/api/v1/items/${objectId.isOpenList}`
    );

    dispatch({
      type: POSTS_SUCCESS,
      payload: data,
    });
    console.log(data);
  } catch (error) {
    dispatch({
      type: POSTS_FAILS,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
