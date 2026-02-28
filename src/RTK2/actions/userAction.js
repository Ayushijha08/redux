// here we'll have to create one action creator which will be having asynchronous behaviour.

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// u need createAsyncThunk function while creating your action creator
/*
export const fetchUsers = createAsyncThunk('fetch/users', (id) => {   // the first parameter of this callback fnc, refers to whatever 
                                                                // u pass while triggering this action via dispatch
    console.log('id', id);
    // we are going to call an api, and all the possible outcomes will be our actions.
    const url = 'https://jsonplaceholder.typicode.com/users'
    // we will be returning a promise from this action creator

    return fetch(url).then(res => res.json())  // this whole thing is a promise. 3 possible outcomes can come out of it. 
})
*/

// 'user/fetch/pending' -> pending action
// 'user/fetch/fulfilled' -> fulfilled action
// 'user/fetch/rejected' -> rejected action

export const fetchUsers = createAsyncThunk('fetch/users', async (_, thunkAPI) => { // we pass _ as the first parameter when there's no need of this(when we dont want to pass anything in its parameter white dispatching)
    // The second parameter is thunkAPI which provides access to dispatch, getState, and other utilities
    // the first parameter is something that you can pass when you dispatch the action(From User-Toolkit component's useEffect -> fetchUsersToolkit("hello"), if we write 'yo' ad the first parameter then yo = "hello" ), but here we are not using it, so we use an underscore (_)
    const url = 'https://jsonplaceholder.typicode.com/users'
    try {
        const res = await axios.get(url);
        return thunkAPI.fulfillWithValue(res.data)   // here, res.data will become the action.payload
    } catch (error) {
        return thunkAPI.rejectWithValue(error);     // here, error will become the action.payload
    }
})  
