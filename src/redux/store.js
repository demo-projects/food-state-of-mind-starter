import {applyMiddleware, combineReducers, createStore} from "redux";
import {authReducer} from "./reducers/auth";
import {logger} from "./middleware/logger";

const rootReducer = combineReducers({
    currentUser: authReducer
});

const middleware = [logger];

export const store  = createStore(rootReducer, {}, applyMiddleware(...middleware));
