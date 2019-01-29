/*
 src/reducers/rootReducer.js
*/
import { combineReducers } from 'redux';

import simpleReducer from './simpleReducer';
import authReducer from "./authReducer";
import reduxFormReducer from "./reduxFormReducer";

export default combineReducers({
  simpleReducer,
  auth: authReducer,
  forms: reduxFormReducer
});
