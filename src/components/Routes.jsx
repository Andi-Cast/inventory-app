import { useContext } from "react";
import { UserContext } from "./UserContext";
import RegisterAndLoginForm from "./RegisterAndLoginForm";
import DashBoard from "./DashBoard";

export default function Routes() {
    const { isAuthenticated } = useContext(UserContext);

    if(isAuthenticated) {
        return(
            <DashBoard/>
        )
    }

    return (
        <RegisterAndLoginForm/>
    )
}