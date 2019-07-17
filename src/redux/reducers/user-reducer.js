import {LOGIN, LOGOUT} from "../actions/user-actions";

export function userReducer(state = null, action) {
  switch (action.type) {
    case LOGIN:
      return action.payload;
    case LOGOUT:
      return null;
    default:
      return state;
  }
}