import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserContextProvider({children}) {
    const [loggedInUsername, setLoggedInUsername] = useState(null);
    const [loggedInId, setLoggedInId] = useState(null);

    return (
        <UserContext.Provider value={{loggedInUsername, setLoggedInUsername, loggedInId, setLoggedInId}}>
            {children}
        </UserContext.Provider>
    )
}