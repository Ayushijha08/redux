import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/*
export const fetchUsers = createAsyncThunk('users/fetch', (userId) => {  // userId = 'hello'
    // the first parameter is something that you can pass when you dispatch the action(From User-Toolkit component's useEffect -> fetchUsersToolkit("hello"), if we write 'userId' as the first parameter then userId = "hello" ), but here we are not using it, so we use an underscore (_)
    //console.log(yo); // "hello" will be logged to the console when the action is dispatched
    console.log('userId passed as a param: ', userId); // "hello" will be logged to the console when the action is dispatched
    // This is a simple action creator that returns a promise
    // const url = `https://jsonplaceholder.typicode.com/users/${userId}`

    const url = 'https://jsonplaceholder.typicode.com/users'

    return fetch(url).then(res => res.json())
})

*/

// this above action creator returns a promise. from which we get 3 actions. 
// 'user/fetch/pending' -> pending action
// 'user/fetch/fulfilled' -> fulfilled action
// 'user/fetch/rejected' -> rejected action


export const fetchUsers = createAsyncThunk('users/fetch', async (_, thunkAPI) => { // whenever in javascript if you don't use the first parameter, you can use an underscore (_) to indicate that it's intentionally unused
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