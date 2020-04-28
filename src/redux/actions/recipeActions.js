import * as types from "./actionTypes";
import * as recipeApi from "../../api/recipeApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadRecipeSuccess(recipes) {
  return { type: types.LOAD_RECIPES_SUCCESS, recipes };
}

export function createRecipeSuccess(recipe) {
  return { type: types.CREATE_RECIPE_SUCCESS, recipe };
}

export function updateRecipeSuccess(recipe) {
  return { type: types.UPDATE_RECIPE_SUCCESS, recipe };
}

export function deleteRecipeOptimistic(recipe) {
  return { type: types.DELETE_RECIPE_OPTIMISTIC, recipe };
}

export function loadRecipes() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return recipeApi
      .getRecipes()
      .then(recipes => {
        dispatch(loadRecipeSuccess(recipes));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function saveRecipe(recipe) {
  //eslint-disable-next-line no-unused-vars
  return function(dispatch, getState) {
    dispatch(beginApiCall());
    return recipeApi
      .saveRecipe(recipe)
      .then(savedRecipe => {
        recipe.id
          ? dispatch(updateRecipeSuccess(savedRecipe))
          : dispatch(createRecipeSuccess(savedRecipe));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function deleteRecipe(recipe) {
  return function (dispatch) {
    dispatch(deleteRecipeOptimistic(recipe));
    return recipeApi.deleteRecipe(recipe.id);
  };
}
