import axios from "axios";

import {
  PHOTOS_REQUEST,
  PHOTOS_SUCCESS,
  PHOTOS_FAILS,
} from "../constants/photoConstant";

// Thunk action creator for searching photos
export const searchPhotos = (query) => async (dispatch) => {
  

  try {
    
    dispatch({ type: PHOTOS_REQUEST });
    const { data } = await axios.get(
      `https://hn.algolia.com/api/v1/search?query=${query}`
    );

    dispatch({
      type: PHOTOS_SUCCESS,
      payload: data.hits,
    });
    console.log(data)
  } catch (error) {
    dispatch({
      type: PHOTOS_FAILS,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export default searchPhotos;
