// here we'll have to create one action creator which will be having asynchronous behaviour.

import { createAsyncThunk } from "@reduxjs/toolkit";
// u need createAsyncThunk function while creating your action creator
export const fetchUsers = createAsyncThunk('fetch/users', (id) => {   // the first parameter of this callback fnc, refers to whatever 
                                                                // u pass while triggering this action via dispatch
    console.log('id', id);
    // we are going to call an api, and all the possible outcomes will be our actions.
    const url = 'https://jsonplaceholder.typicode.com/users'
    // we will be returning a promise from this action creator

    return fetch(url).then(res => res.json())  // this whole thing is a promise. 3 possible outcomes can come out of it. 
})