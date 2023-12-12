// src/reducers/darkModeReducer.js
import { TOGGLE_OPEN_LIST } from "../constants/openListConstant";

const initialState = {
  isOpenList: 0,
};

const openListReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_OPEN_LIST:
      return { ...state, isOpenList: action.value };
    default:
      return state;
  }
};

export default openListReducer;
