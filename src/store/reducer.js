import { combineReducers } from "redux";
import searchReducer from "./searchSlice";

export default combineReducers({
  searchResults: searchReducer,
});
