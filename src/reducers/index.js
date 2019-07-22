import { combineReducers } from "redux";
import somethingReducer from "./somethingReducer";

export default combineReducers({
  something: somethingReducer
});
