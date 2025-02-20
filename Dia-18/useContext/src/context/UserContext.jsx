import { useState, createContext } from "react";
import { Button } from "@/components/Button";

export const UserContext = createContext({});

//recibimos children
export const UserContextProvider = ({children}) =>{
    const [user, setUser] = useState(null);
    const name = "Andrea"
    const login = (name) => setUser({name});

    const logout = () => setUser(null);

    return(
        <UserContext.Provider value={{user, login, logout}}>
            {children}
        </UserContext.Provider>
    )
}