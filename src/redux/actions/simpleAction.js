/*
 src/actions/simpleAction.js
*/

import { SIMPLE_ACTION } from "../constants/types";

export const simpleAction = () => dispatch => {
  dispatch({
    type: SIMPLE_ACTION,
    payload: "result_of_simple_action"
  });
};
