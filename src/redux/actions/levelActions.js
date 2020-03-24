import * as types from "./actionTypes";
import * as levelApi from "../../api/levelApi";

export function loadLevelsSuccess(levels) {
  return { type: types.LOAD_LEVELS_SUCCESS, levels };
}

export function loadLevels() {
  return function(dispatch) {
    return levelApi
      .getLevels()
      .then(levels => {
        dispatch(loadLevelsSuccess(levels));
      })
      .catch(error => {
        throw error;
      });
  };
}
