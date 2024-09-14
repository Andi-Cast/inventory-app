import { useEffect } from "react";
import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserContextProvider({children}) {
    const [userDetails, setUserDetails] = useState(null);
    const [jwt, setJwt] = useState(null);
    const [isAdmin, setIsAdmin] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const sessionJwt = sessionStorage.getItem("jwt");
        const sessionUserDetails = sessionStorage.getItem("userDetails")

        if (sessionJwt && sessionUserDetails) {
            const parsedUserDetails = JSON.parse(sessionUserDetails);
            setJwt(sessionJwt);
            setUserDetails(parsedUserDetails)
            setIsAuthenticated(!!sessionJwt);
        
            if(parsedUserDetails && parsedUserDetails.role) {
                setIsAdmin(parsedUserDetails.role === "ADMIN");
            }
        }
    }, []);

    const login = (response) => {
        sessionStorage.setItem("jwt", response.token);
        sessionStorage.setItem("userDetails", JSON.stringify(response));
        setJwt(response.token);
        setUserDetails(response);
        setIsAuthenticated(true);
        setIsAdmin(response.role === "ADMIN");
    }

    const logout = () => {
        sessionStorage.removeItem("jwt");
        sessionStorage.removeItem("userDetails");
        setJwt(null);
        setUserDetails(null);
        setIsAuthenticated(false);
        setIsAdmin(false);
    }

    return (
        <UserContext.Provider value={{ userDetails, setUserDetails, jwt, isAuthenticated, isAdmin, setIsAdmin,login, logout }}>
            {children}
        </UserContext.Provider>
    )
}