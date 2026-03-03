import React, { useContext } from 'react'
import { UserContext } from '../contexts/ContextUser'

const Login = () => {
    const {login} = useContext(UserContext);
  return (
    <div>
        <button onClick={() => login()}>Login</button>
    </div>
  )
}

export default Login