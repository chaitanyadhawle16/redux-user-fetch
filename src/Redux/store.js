import { legacy_createStore as createStore, applyMiddleware } from "redux";
import postReducer from "./reducer";

import thunk from "redux-thunk";

const middleWares = [thunk];

const store = createStore(postReducer, applyMiddleware(...middleWares));
export default store;