/*
 src/actions/simpleAction.js
*/
import { api } from "../../../api/init";
import { LOGIN_ACTION, LOGIN_ERROR_ACTION } from "../constants/types";

export const fetchUser = data => async dispatch => {
  try {
    const response = await api.post("/users/login", {
      email: data.elements.email.value,
      password: data.elements.password.value
    });

    // let tokenEmail = { email: response.data.email };
    // this.setState({ token: tokenEmail });

    const loggedInUser = response.data;
    console.log("LoggedIn User", loggedInUser);
    dispatch({ type: LOGIN_ACTION, payload: loggedInUser });
  } catch (error) {
    dispatch({ type: LOGIN_ERROR_ACTION, payload: error });
  }
};
