import { TOGGLE_SEARCH_QUERY } from "../constants/searchQueryConstant";

export const searchQuery = (val) => {
  return {
    type: TOGGLE_SEARCH_QUERY,
    value: val,
  };
};
