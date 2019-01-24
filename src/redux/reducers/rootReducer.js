/*
 src/reducers/rootReducer.js
*/
import { combineReducers } from "redux";
import simpleReducer from "./simpleReducer";
import logInReducer from "./logInReducer";

export default combineReducers({
  simpleReducer,
  user: logInReducer
});
