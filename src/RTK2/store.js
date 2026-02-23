// configureStore -> it comes from RTK(@reduxjs/toolkit). it retruns a redux store instance. it also offers 
// the functionality of combineReducer.

import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";

export const store = configureStore({
    reducer: {
        counter: counterSlice  // this is counterSlice ka reducer,
    // we can add more reducers if we want
}
})


// export const store = configureStore({ // this gives u the functionality what createStore gives(creation of store) and combineReducers as well
//     reducer: {
//         counter: counterSlice,
//         user: userSlice,
//         // data: dataSlice
//     }
// })

// export default store;