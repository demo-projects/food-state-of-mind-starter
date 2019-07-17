import {useDispatch, useSelector} from "react-redux";
import * as authActions from '../actions/auth';

export function useAuth() {
  const currentUser = useSelector(state => state.currentUser);
  const dispatch = useDispatch();

  const login = ({email, password, name}) => {
      dispatch(authActions.login({email, password,name}));
  };

  const logout = () => {
    dispatch(authActions.logout());
  };

  return {currentUser, login, logout}
}