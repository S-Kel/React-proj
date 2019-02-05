import { api } from "../../api/init";
import {
  REQUEST_AUTH_ACTION,
  AUTH_ACTION,
  LOGOUT_ACTION,
  AUTH_ERROR_ACTION
} from "./constants/types";
// const REQUEST_AUTH_ACTION = 'REQUEST_AUTH_ACTION';

const authenticateUser = (userRoute, postData) => async dispatch => {
  try {
    dispatch({type: REQUEST_AUTH_ACTION});
    const response = await api.post(userRoute, postData);

    dispatch({
      type: AUTH_ACTION,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR_ACTION,
      payload: error
    });
  }
};

const logoutUser = () => async dispatch => {
  try {
    await api.get('/users/logout');

    dispatch({
      type: LOGOUT_ACTION,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR_ACTION,
      payload: error
    });
  }
}

export { authenticateUser, logoutUser }
