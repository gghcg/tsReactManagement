import { legacy_createStore, combineReducers } from "redux";
import numReducer from "./numStore";
const reducer = combineReducers({ numReducer });

const store = legacy_createStore(reducer);

export default store;
