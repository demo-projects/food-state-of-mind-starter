import {useDispatch, useSelector} from "react-redux";
import {logIn, logOut} from "../redux/actions/user-actions";

export function useCurrentUser () {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const signIn = () => {
    dispatch(logIn())
  };

  const signOut = () => {
    dispatch(logOut)
  };

  return {user, signIn, signOut}
}