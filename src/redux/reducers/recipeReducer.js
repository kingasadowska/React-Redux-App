import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function recipeReducer(state = initialState.recipes, action) {
  switch (action.type) {
    case types.CREATE_RECIPE:
      return [...state, { ...action.recipe }];
    case types.LOAD_RECIPES_SUCCESS:
      return action.recipes;
    default:
      return state;
  }
}
