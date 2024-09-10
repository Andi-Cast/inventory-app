import { useContext } from "react";
import { UserContext } from "./UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Header() {

    const { userDetails, logout } = useContext(UserContext);
    const [showUserOptions, setShowUserOptions] = useState(false);

    const toggleUserOptions = () => {
        setShowUserOptions(!showUserOptions);
    }

    return (
        <div className="flex justify-end items-center p-4 w-full bg-white border-b border-gray-300">
            <div onClick={toggleUserOptions} className="relative flex items-center pr-4 border-r border-gray-300 gap-2 hover:text-gray-600 cursor-pointer">
                <span className="text-xl">Hi, {userDetails.firstname}</span>
                <FontAwesomeIcon className="text-xl" icon={faCaretDown}/>
                {showUserOptions && (
                    <nav onMouseLeave={() => setShowUserOptions(false)} className="absolute left-0 top-full min-w-full bg-white shadow-lg border rounded-lg z-10">
                        <div onClick={logout} className="flex justify-start text-nowrap border-t border-gray-300 py-2 px-3 hover:bg-gray-200 w-full">Log out</div>
                    </nav>
                )}
            </div>
            <div className="pl-4">
                <div className="w-8 h-8 rounded-full flex items-center bg-gray-300">
                    <div className="text-center w-full opacity-80">
                        {userDetails.firstname[0]}
                    </div>
                </div>
            </div>
        </div>
    );
}