import { useContext } from "react";
import { UserContext } from "./UserContext";
import RegisterAndLoginForm from "./RegisterAndLoginForm";

export default function Routes() {
    const { isAuthenticated } = useContext(UserContext);

    if(isAuthenticated) {
        return(
            <div className="flex justify-center">Successful login.</div>
        )
    }

    return (
        <RegisterAndLoginForm/>
    )
}