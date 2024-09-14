import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import EditAccountForm from "./EditAccountForm";

export default function User({ user, onUpdateUser, onDeleteUser }) {

    const [userDetails, setUserDetails] = useState({
        id: user.id,
        firstname: user.firstname,
        lastname: user.lastname,
        role: user.role
    })
    const [showActions, setShowActions] = useState(false);
    const [isEditUserFormOpen, setIsEditUserFormOpen] = useState(false); 

    const toggleActions = () => {
        setShowActions(!showActions);
    }

    const handleOpenEditUserForm = () => {
        setIsEditUserFormOpen(true);
    }

    const handleCloseEditUserForm = () => {
        setIsEditUserFormOpen(false);
    }

    return(
        <div className="grid grid-cols-4 bg-white">
            <div className="flex justify-center border-b border-l border-gray-500 px-3 py-2">{userDetails.firstname}</div>
            <div className="flex justify-center border-b border-l border-gray-500 px-3 py-2">{userDetails.lastname}</div>
            <div className="flex justify-center border-b border-l border-gray-500 px-3 py-2">{userDetails.role}</div>
            <div className="group relative flex justify-center items-center border-b border-l border-r border-gray-500 px-3 py-2">
                <FontAwesomeIcon onClick={toggleActions} className="text-slate-500 hover:text-slate-700 text-2xl cursor-pointer" icon={faEllipsis}/>
                {showActions && (
                    <nav onMouseLeave={() => setShowActions(false)} className="absolute left-0 top-full w-full bg-white shadow-lg border z-10">
                        <ul className="text-gray-700">
                            <li onClick={handleOpenEditUserForm} className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Edit Account <FontAwesomeIcon icon={faEdit}/></li>
                            <li onClick={() => onDeleteUser(user.id)}className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Delete <FontAwesomeIcon icon={faTrashAlt}/></li>
                        </ul>
                    </nav>
                )}
            </div>

            <EditAccountForm  user={user} isOpen={isEditUserFormOpen} onClose={handleCloseEditUserForm} onUpdateUser={onUpdateUser} setUserDetails={setUserDetails}/>
        </div>
    );
}