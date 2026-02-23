// this conterSlice is going to manage one state
// createSlice is a method or function provided by @reduxjs/toolkit, it basically returns a slice instance.

import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',  // this name should be unique, compared to other slices present in your application
    initialState: {counter: 0},
    reducers: {
        increment: (state) => {  // the first parameter refers to the initialState
            state.counter += 1
        },
        decrement: (state) => {
            state.counter -= 1
        },
        addBy: (state, action) => {  // while triggering this action, we can pass something in its action object. Generally we call it payload of that action
            state.counter += action.payload
        },
        addBy10: (state) => {
            state.counter += 10
        }
    }
})

export const {increment, decrement, addBy, addBy10} = counterSlice.actions
export default counterSlice.reducer;