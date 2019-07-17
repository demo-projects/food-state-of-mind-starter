import {LOGIN, LOGOUT} from "../actions/auth";

export function authReducer(state = null, action) {
  const {type, payload} = action;

  switch (type) {
    case LOGIN:
      return payload;

    case LOGOUT:
      return null;

    default:
      return state;
  }
}