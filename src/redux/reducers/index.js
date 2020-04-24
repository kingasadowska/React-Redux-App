import { combineReducers } from "redux";
import recipes from "./recipeReducer";
import levels from "./levelReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  recipes,
  levels,
  apiCallsInProgress
});

export default rootReducer;
