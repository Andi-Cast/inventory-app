import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function EditUserForm({ user, isOpen, onClose, onUpdateUser, setUserDetails }) {
    const [editedUser, setEditedUser] = useState({
        id: user.id,
        firstname: user.firstname,
        lastname: user.lastname,
        role: user.role
    });

    useEffect(() => {
        setEditedUser({
            id: user.id,
            firstname: user.firstname,
            lastname: user.lastname,
            role: user.role
        });
    }, [user]);

    const handleChange = (ev) => {
        setEditedUser({ ...editedUser, [ev.target.name]: ev.target.value });
    };

    const handleSubmit = (ev) => {
        ev.preventDefault();
        try {
            onUpdateUser(editedUser);
            setUserDetails({...user, role: editedUser.role})
            onClose();
        } catch (error) {
            console.log("Error updating user: ", error);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-5 rounded-lg shadow-lg w-1/3">
                <header className="flex justify-between items-center mb-1 text-2xl text-gray-800">
                    Update User
                    <FontAwesomeIcon
                        className="hover:text-red-600 font-bold cursor-pointer"
                        onClick={onClose}
                        icon={faX}
                    />
                </header>
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <label className="font-medium text-gray-700 mb-1">Firstname</label>
                    <input
                        type="text"
                        name="firstname"
                        value={editedUser.firstname}
                        onChange={handleChange}
                        placeholder="First Name"
                        className="p-2 mb-4 rounded-lg border border-gray-300 cursor-pointer"
                        required
                    />

                    <label className="font-medium text-gray-700 mb-1">Lastname</label>
                    <input
                        type="text"
                        name="lastname"
                        value={editedUser.lastname}
                        onChange={handleChange}
                        placeholder="Last Name"
                        className="p-2 mb-4 rounded-lg border border-gray-300 cursor-pointer"
                        required
                    />

                    <label className="font-medium text-gray-700 mb-1">Account Access</label>
                    <div className="grid grid-cols-2 ml-1 mb-4">
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="role"
                                value="ADMIN"
                                checked={editedUser.role === "ADMIN"}
                                onChange={handleChange}
                                className="form-radio"
                                required
                            />
                            <span className="ml-2">ADMIN</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="role"
                                value="MEMBER"
                                checked={editedUser.role === "MEMBER"}
                                onChange={handleChange}
                                className="form-radio"
                                required
                            />
                            <span className="ml-2">MEMBER</span>
                        </label>
                    </div>
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700">
                        Update User
                    </button>
                </form>
            </div>
        </div>
    );
}
