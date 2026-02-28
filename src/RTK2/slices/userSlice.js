import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../actions/userAction";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        data: [],
        error: ""
    },
    extraReducers: (builder) => {
        // we are going to add cases according to the 3 possible outcomes we get through the action creator we provide
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => { // the 2nd parameter(action) refers to whatever data comes through that api call
            state.loading = false;
            state.data = action.payload
            state.error = ""
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.data = [];
            state.error = action.payload
        })
    }
})

export default userSlice.reducer;