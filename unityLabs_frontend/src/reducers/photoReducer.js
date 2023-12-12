import {
  PHOTOS_REQUEST,
  PHOTOS_SUCCESS,
  PHOTOS_FAILS,
} from "../constants/photoConstant";

export const photoReducer = (state = { photos: [] }, action) => {
  switch (action.type) {
    case PHOTOS_REQUEST:
      return { loading: true, ...state };
    case PHOTOS_SUCCESS:
      return { loading: false, photos: action.payload };
    case PHOTOS_FAILS:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export default photoReducer;
