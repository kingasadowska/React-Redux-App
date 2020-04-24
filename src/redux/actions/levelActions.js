import * as types from "./actionTypes";
import * as levelApi from "../../api/levelApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadLevelsSuccess(levels) {
  return { type: types.LOAD_LEVELS_SUCCESS, levels };
}

export function loadLevels() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return levelApi
      .getLevels()
      .then(levels => {
        dispatch(loadLevelsSuccess(levels));
      })
      .catch(error => {
        dispatch(apiCallError(error))
        throw error;
      });
  };
}
