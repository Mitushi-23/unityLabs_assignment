import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { postsReducer } from "./reducers/postsReduces";
import photoReducer from "./reducers/photoReducer";
import darkModeReducer from "./reducers/darkModeReducer";
import openListReducer from "./reducers/openListReducer";
import searchQueryReducer from "./reducers/searchQueryReducer";

const reducer = combineReducers({
  posts: postsReducer,
  photos: photoReducer,
  darkMode: darkModeReducer,
  openList: openListReducer,
  search_query: searchQueryReducer,
});

const middleware = [thunk];
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
