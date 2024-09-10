import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function User({ user }) {

    const [showActions, setShowActions] = useState(false);

    const toggleActions = () => {
        setShowActions(!showActions);
    }

    return(
        <div className="grid grid-cols-4 bg-white">
            <div className="flex justify-center border-b border-l border-gray-500 px-3 py-2">{user.firstname}</div>
            <div className="flex justify-center border-b border-l border-gray-500 px-3 py-2">{user.lastname}</div>
            <div className="flex justify-center border-b border-l border-gray-500 px-3 py-2">{user.role}</div>
            <div className="group relative flex justify-center items-center border-b border-l border-r border-gray-500 px-3 py-2">
                <FontAwesomeIcon onClick={toggleActions} className="text-slate-500 hover:text-slate-700 text-2xl cursor-pointer" icon={faEllipsis}/>
                {showActions && (
                    <nav onMouseLeave={() => setShowActions(false)} className="absolute left-0 top-full w-full bg-white shadow-lg border z-10">
                        <ul className="text-gray-700">
                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Edit Account Access <FontAwesomeIcon icon={faEdit}/></li>
                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Delete <FontAwesomeIcon icon={faTrashAlt}/></li>
                        </ul>
                    </nav>
                )}
            </div>
        </div>
    );
}