import React, { useContext } from 'react'
import { UserContext } from '../contexts/ContextUser'
import Login from '../pages/Login';
// hocs -> Higher order components are those components who take a component in its parameter or returns a component
const withAuthorization = (Component) => {  // component = ABout
  return () => {
    const {user} = useContext(UserContext);
// ! null -> true
    if(!user) return <Login />
    return <Component />
  }
}

export default withAuthorization