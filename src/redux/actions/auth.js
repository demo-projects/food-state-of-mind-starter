export const LOGIN = '[AUTH] LOGIN';
export const LOGOUT = '[AUTH] LOGOUT';


export function login ({ email, password, name }) {
  return {
    type: LOGIN,
    payload: {email, password, name}
  }
}

export function logout() {
  return {
    type: LOGOUT,
  }
}
