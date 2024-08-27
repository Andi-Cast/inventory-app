import { useEffect } from "react";
import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserContextProvider({children}) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const jwt = sessionStorage.getItem("jwt");
        setIsAuthenticated(!!jwt);
    }, []);

    const login = (token) => {
        sessionStorage.setItem("jwt", token);
        setIsAuthenticated(true);
    }

    const logout = () => {
        sessionStorage.removeItem("jwt");
        setIsAuthenticated(false);
    }

    return (
        <UserContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </UserContext.Provider>
    )
}