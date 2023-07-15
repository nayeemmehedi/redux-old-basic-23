import { combineReducers } from "redux";
import { reducer } from "./reducer";

const combineReducer = combineReducers({
  allProducts: reducer,
});

export default combineReducer;
