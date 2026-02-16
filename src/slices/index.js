import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice"

const store = configureStore({ // this gives u the functionality what createStore gives(creation of store) and combineReducers as well
    reducer: {
        counter: counterSlice,
        // user: userSlice,
        // data: dataSlice
    }
})