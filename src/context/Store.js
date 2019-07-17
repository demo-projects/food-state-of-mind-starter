import React, {createContext, useReducer, useEffect} from 'react';
import {LOGIN, LOGOUT} from "../hooks/useAuth";
import {combineReducers} from "../services/combine-reducers";
import {authReducer} from "./reducers/authReducer";

export const StoreContext = createContext({
    user: null
});

const rootReducer = combineReducers({
  user: authReducer
});

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, {});

  return (
      <StoreContext.Provider value={{ state, dispatch}}>{children}</StoreContext.Provider>
  );
};

export default Store;
