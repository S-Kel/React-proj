import { AUTH_ACTION, LOGOUT_ACTION, AUTH_ERROR_ACTION } from "../actions/constants/types";

const initialState = {
  loggedIn: false,
  authenticatedUserEmail: null,
  logInError: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_ACTION:
      return {
        ...state,
        loggedIn: true,
        authenticatedUserEmail: action.payload
      };
    case LOGOUT_ACTION:
      return {
        ...state,
        loggedIn: false,
        authenticatedUserEmail: null
      };
    case AUTH_ERROR_ACTION:
      return {
        ...state,
        loggedInError: action.payload
      };
    default:
      return state;
  }
};
