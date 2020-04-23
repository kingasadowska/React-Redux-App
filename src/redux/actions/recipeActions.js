import * as types from "./actionTypes";
import * as recipeApi from "../../api/recipeApi";

export function loadRecipeSuccess(recipes) {
  return { type: types.LOAD_RECIPES_SUCCESS, recipes };
}

export function createRecipeSuccess(recipe) {
  return { type: types.CREATE_RECIPE_SUCCESS, recipe };
}

export function updateRecipeSuccess(recipe) {
  return { type: types.UPDATE_RECIPE_SUCCESS, recipe };
}

export function loadRecipes() {
  return function(dispatch) {
    return recipeApi
      .getRecipes()
      .then(recipes => {
        dispatch(loadRecipeSuccess(recipes));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function saveRecipe(recipe) {
  //eslint-disable-next-line no-unused-vars
  return function(dispatch, getState) {
    return recipeApi
      .saveRecipe(recipe)
      .then(savedRecipe => {
        recipe.id
          ? dispatch(updateRecipeSuccess(savedRecipe))
          : dispatch(createRecipeSuccess(savedRecipe));
      })
      .catch(error => {
        throw error;
      });
  };
}
