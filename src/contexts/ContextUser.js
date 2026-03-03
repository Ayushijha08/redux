import { Children, createContext, useState } from "react";

export const UserContext = createContext();

export default function UserProvider ({children}) {
    const [user, setUser] = useState(null);

    function login () {
        setUser({name: "Ayushi", age: 22})
    }

    // const obj = {user,login, setUser}

    return (
        <UserContext.Provider value={{user, login, setUser}}>
            {children}
        </UserContext.Provider>
    )
}