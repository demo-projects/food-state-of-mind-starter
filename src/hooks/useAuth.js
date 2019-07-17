import {useContext} from 'react';
import {StoreContext} from "../context/Store";

export const LOGIN = '[AUTH] LOGIN';
export const LOGOUT = '[AUTH] LOGOUT';

export function signIn ({ email, password, name }) {
  return {
    type: LOGIN,
    payload: {email, password, name}
  }
}

export function signOut() {
  return {
    type: LOGOUT,
  }
}

export function useAuth() {
  const {state, dispatch} = useContext(StoreContext);

  const login = ({email, password, name}) => {
    dispatch(signIn({email, password, name}))
  };

  const logout = () => {
    dispatch(signOut())
  };

  return {currentUser: state, login, logout }
}
