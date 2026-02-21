import axios from "axios"
import { PRODUCT_FAILURE, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "./actionTypes"


export const fetchProductRequest = () => {
    return {
        type: PRODUCT_REQUEST
    }
}

export const fetchProductSuccess = (products) => {
    return {
        type: PRODUCT_SUCCESS,
        payload: products
    }
}

export const fetchProductFailure = (error) => {
    return {
        type: PRODUCT_FAILURE,
        payload: error
    }
}


export const fetchProduct = () => {  // here's the action creator which is returning a fucntion instead of action object
    return function (dispatch) {
        dispatch(fetchProductRequest())
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                console.log(response.data)
                dispatch(fetchProductSuccess(response.data))
            }
            ).catch(err => {
                console.log(err.message);
                dispatch(fetchProductFailure(err.message))
            });
    }
}


// ultimate goal: 
// call an api
// take the response and send it in the redux store
// so that my application can access that redux store's data