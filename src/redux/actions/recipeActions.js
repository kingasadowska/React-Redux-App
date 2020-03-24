import * as types from "./actionTypes";
import * as recipeApi from "../../api/recipeApi";

export function createCourse(recipe) {
  return { type: types.CREATE_RECIPE, recipe };
}

export function loadCourseSuccess(recipes) {
  return { type: types.LOAD_RECIPES_SUCCESS, recipes };
}

export function loadRecipes() {
  return function(dispatch) {
    return recipeApi
      .getRecipes()
      .then(recipes => {
        dispatch(loadCourseSuccess(recipes));
      })
      .catch(error => {
        throw error;
      });
  };
}
