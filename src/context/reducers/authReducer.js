import {LOGIN, LOGOUT} from "../../hooks/useAuth";

export function authReducer(state = null, action) {

  switch (action.type) {
    case LOGIN:
      return action.payload;
    case LOGOUT:
    default:
      return null;
  }
}