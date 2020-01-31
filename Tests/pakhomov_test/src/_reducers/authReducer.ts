import { userConstants } from '../_constants/allConstants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action: any) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggedIn: false,
        loggingIn: true,
        user: action.user,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        loggingIn: false,
        user: action.user
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    default:
      return state
  }
}