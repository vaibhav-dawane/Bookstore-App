// to access our user globally

import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext()

export default function AuthProvider({children}) {
    const initialAuthUser = localStorage.getItem("Users"); // get the logged in user
    const [authUser, setAuthUser] = useState(
        initialAuthUser? JSON.parse(initialAuthUser) : undefined // if theres user then store its info, else store undefined
    )

    return (
        <AuthContext.Provider value={[authUser, setAuthUser]}>
            {children}
        </AuthContext.Provider>
    )
}
 
export const useAuth = () => useContext(AuthContext);
