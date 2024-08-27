import { useEffect } from "react";
import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserContextProvider({children}) {
    const [userDetails, setUserDetails] = useState(null);
    const [jwt, setJwt] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const sessionJwt = sessionStorage.getItem("jwt");
        const sessionUserDetails = sessionStorage.getItem("userDetails")
        if (sessionJwt && sessionUserDetails) {
            setJwt(sessionJwt);
            setUserDetails(JSON.parse(sessionUserDetails))
            setIsAuthenticated(!!sessionJwt);
        }
    }, []);

    const login = (response) => {
        sessionStorage.setItem("jwt", response.token);
        sessionStorage.setItem("userDetails", JSON.stringify(response));
        setJwt(response.token);
        setUserDetails(response);
        setIsAuthenticated(true);
    }

    const logout = () => {
        sessionStorage.removeItem("jwt");
        sessionStorage.setItem("userDetails",  JSON.stringify(response));
        setJwt(null);
        setUserDetails(null);
        setIsAuthenticated(false);
    }

    return (
        <UserContext.Provider value={{ userDetails, jwt, isAuthenticated, login, logout }}>
            {children}
        </UserContext.Provider>
    )
}