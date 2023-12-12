// src/reducers/darkModeReducer.js
import { TOGGLE_SEARCH_QUERY } from "../constants/searchQueryConstant";

const initialState = {
  query_value:""
};

const searchQueryReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SEARCH_QUERY:
      return { ...state, query_value: action.value };
    default:
      return state;
  }
};

export default searchQueryReducer;
