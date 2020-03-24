import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function levelReducer(state = initialState.levels, action) {
  switch (action.type) {
    case types.LOAD_LEVELS_SUCCESS:
      return action.levels;
    default:
      return state;
  }
}
