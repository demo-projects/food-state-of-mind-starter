export const LOGIN = '[USER] login';
export const LOGOUT = '[USER] logout';

export function logIn(email, password) {
  return {
    type: LOGIN,
    payload: { firstName: 'Nir Kaufman' }
  }
}

export function logOut() {
  return { type: LOGOUT}
}
