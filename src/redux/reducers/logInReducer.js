/*
 src/reducers/simpleReducer.js
*/
import { LOGIN_ACTION, LOGIN_ERROR_ACTION } from "../constants/types";

const initialState = {
  loggedInUser: {},
  loggedInError: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ACTION:
      return { ...state, loggedInUser: action.payload };
    case LOGIN_ERROR_ACTION:
      return { ...state, loggedInError: action.payload };
    default:
      return state;
  }
};
