// what are slices -> Slices are a component in redux toolkit which provides a consolidated way of writing your state, action & reducers in one place

import { createSlice } from "@reduxjs/toolkit";

// slice = state + reducers + actions
const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        counter: 0
    },
    reducers: {
        increment: (state) => state.counter += 1,
        decrement: (state) => state.counter -= 1,
        addBy10: (state) => state.counter += 10,
        addBy: (state, action) => state.counter += action.payload
    }
})

export const { increment, decrement, addBy10, addBy } = counterSlice.actions;
export default counterSlice.reducer;