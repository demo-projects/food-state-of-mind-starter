import React, {createContext, useReducer, useEffect} from 'react';
import {LOGIN, LOGOUT} from "../hooks/useAuth";

export const AuthContext = createContext();

function authReducer(state, action) {
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

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, null);

  const dispatchWithLogger= (action) => {
    console.log('CURRENT STATE', state);
      dispatch(action);
  };

  useEffect(() => {
    console.log('NEXT STATE', state);
  }, [state]);

  return (
      <AuthContext.Provider value={{ state, dispatch: dispatchWithLogger}}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
