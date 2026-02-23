import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './RTK2/slices/counterSlice';

const App2 = () => {
    // Zustand -> Latest state management tool out there
    // Redux Toolkit -> redux toolkit has big community support than Zustand
    // action, reducer & store -> the core functionality is exactly the same.
    // in order to implement the redux toolkit, there are few tools that u must be hands on with.
    // slices -> major part of redux toolkit. When toolkit was introduced, it came with a consolidated way of implementing 
    // redux flow in your application. The slices are that consolidated place where actions, reducers, state are kept in
    // one place.
    // slices -> action + state + reducer

    // in order to RTK u need to install it package -> npm i @reduxjs/toolkit, in order to communicate between
    // your react application and redux store we need to install react-redux package. -> npm i react-redux


    // step 1: Create slices -> u need to initialize the state first and its corresponding actions and reducers.
    // step 2: Create Redux Store
    // step 3: Give access of the Redux Store to your application using Provider from react-redux
    // step 4: fetch the state, according to ur need u can manipulate the state by triggering some actions.

    // 1. fetch the state -> useSelector -> its a hook provided by react-redux

    const {counter} = useSelector((state) => state.counter)  // we are fetching state from counterSlice

    console.log('counrt', counter);
    // in order to trigger an action we need dispatch. and dispatch comes from useDispatch hook, it returns dispatch.
    // it also comes from react-redux

    const dispatch = useDispatch()
  return (
    <div>
        Counter: {counter}
        <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  )
}

export default App2