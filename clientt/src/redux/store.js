import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

const initialState = {};

const reduucers = combineReducers({});

const store = createStore(
  reduucers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
