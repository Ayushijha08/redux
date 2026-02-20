import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../actions/userAction";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        users: [],
        error: ''
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.loading = true
        })   // similar to switch case, we are just adding cases for each actions
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload
            state.error = '' // suppose the first req was rejected, then again upon hitting the req, it gives u fulfilled, 
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.users = [];
            state.error = action.payload
        })
    }
})

export default userSlice.reducer;