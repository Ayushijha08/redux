import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../actions/userAction'

function Rtk() {
    const {loading, users, error} = useSelector(state => state.user)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers('hello'))
    }, [])
    console.log('users: ', users);
    

  return (
    <div>Rtk
    {loading && <h1>Loading...</h1>}
    {users.length > 0 && users.map((user, i) => (
        <div>
            <h3>ID: {user.id}</h3>
            <h3>Name: {user.name}</h3>
            <h3>Email: {user.email}</h3>
            
        </div>
    ))}
    </div>
  )
}

export default Rtk