import { combineReducers } from "redux";
import recipes from "./recipeReducer";
import levels from "./levelReducer";

const rootReducer = combineReducers({
  recipes,
  levels
});

export default rootReducer;
