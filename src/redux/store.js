import {combineReducers, createStore} from "redux";
import {userReducer} from "./reducers/user-reducer";

const initialState = {
  user: null
};

const rootReducer = combineReducers({
  user: userReducer
});

export const store = createStore(rootReducer, initialState);