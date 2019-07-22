import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
const initialState = {};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  middleware,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
