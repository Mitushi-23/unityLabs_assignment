import { TOGGLE_OPEN_LIST } from "../constants/openListConstant";

export const toggleOpenList = (val) => {
  return {
    type: TOGGLE_OPEN_LIST,
    value: val,
  };
};
