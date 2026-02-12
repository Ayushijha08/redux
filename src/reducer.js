import { combineReducers } from "redux"
import { PRODUCT_FAILURE, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "./actionTypes"

let initialState = {
    loading: false,
    data: [],
    error: ""
}

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_REQUEST:
            return { ...state, loading: true }
        case PRODUCT_SUCCESS:
            return { ...state, loading: false, data: action.payload }
        case PRODUCT_FAILURE:
            return { ...state, loading: false, error: action.payload, data: [] }
        default: 
            return state
    }
}

export const rootReducer = combineReducers({
    data: dataReducer,
})