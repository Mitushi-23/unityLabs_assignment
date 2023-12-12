// src/actions/darkModeActions.js

import { TOGGLE_DARK_MODE } from "../constants/darkModeConstant";

export const toggleDarkMode = () => {
  return {
    type: TOGGLE_DARK_MODE,
  };
};
