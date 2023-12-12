import {
  POSTS_FAILS,
  POSTS_REQUEST,
  POSTS_SUCCESS,
} from "../constants/postsConstant";

export const postsReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case POSTS_REQUEST:
      return { loading: true, ...state };
    case POSTS_SUCCESS:
      return { loading: false, posts: action.payload };
    case POSTS_FAILS:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
