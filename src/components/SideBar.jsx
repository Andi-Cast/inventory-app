import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import { faUserPen } from "@fortawesome/free-solid-svg-icons";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import { faGear } from "@fortawesome/free-solid-svg-icons";

export default function SideBar({ onSelectUsers, onSelectInventory }) {

    const {isAdmin} = useContext(UserContext)

    return (
        <div className="flex flex-col p-4 bg-white h-full border-r border-gray-300">
            <h3 className="text-3xl font-semibold py-2">A-List Inventory</h3>
            <div onClick={onSelectInventory} className="flex items-center gap-3 p-2 border-t border-gray-300 text-gray-500 hover:text-gray-800 hover:bg-gray-200 cursor-pointer">
                <FontAwesomeIcon icon={faBasketShopping}/>
                <span className="text-xl">Inventory</span>
            </div>
            {isAdmin && (
                <div onClick={onSelectUsers} className="flex items-center gap-3 p-2 border-t border-gray-300 text-gray-500 hover:text-gray-800 hover:bg-gray-200 cursor-pointer">
                    <FontAwesomeIcon icon={faUser}/>
                    <span className="text-xl">Users</span>
                </div>
            )}
            <div className="flex items-center gap-3 p-2 border-t border-gray-300 text-gray-500 hover:text-gray-800 hover:bg-gray-200 cursor-pointer">
                <FontAwesomeIcon icon={faUserPen}/>
                <span className="text-xl">Edit Profile</span>
            </div>
            <div className="flex items-center gap-3 p-2 border-t border-gray-300 text-gray-500 hover:text-gray-800 hover:bg-gray-200 cursor-pointer">
                <FontAwesomeIcon icon={faGear}/>
                <span className="text-xl">Settings</span>
            </div>
            <div className="flex items-center gap-3 p-2 border-t border-gray-300 text-gray-500 hover:text-gray-800 hover:bg-gray-200 cursor-pointer">
                <FontAwesomeIcon icon={faBan}/>
                <span className="text-xl">Deactivate Account</span>
            </div>
        </div>
    );
}