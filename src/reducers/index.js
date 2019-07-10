import AuthReducer from "reducers/auth";
import { combineReducers } from "redux";

export default combineReducers({
  auth: AuthReducer
});
