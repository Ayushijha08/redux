import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./reducer";
import { thunk } from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk))


// apply middleware is just a medium to apply thunk.
// thunk is a middleware which lets you handle asynchronous operations in redux. It helpes u create action creators
// which returns functions instead of action objects, which eventually helps in managing the asynchronous operation(api calls)
export default store;