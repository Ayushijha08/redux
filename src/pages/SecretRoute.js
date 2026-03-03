import React, { useContext } from 'react'
import { UserContext } from '../contexts/ContextUser'
import Login from './Login';
import { Outlet } from 'react-router-dom';

const SecretRoute = () => {
    const { user } = useContext(UserContext);

    if (!user) return <Login />
    return <Outlet />
}

// Outlet -> Child Route
export default SecretRoute