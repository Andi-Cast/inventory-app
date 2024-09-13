import { useState } from "react";
import { getUsersAPI, updateUserAPI } from "../api/ApiServices";
import User from "./User";
import { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";

export default function UserList() {

    const {userDetails} = useContext(UserContext);

    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchTerm = (ev) => {
        setSearchTerm(ev.target.value);
    }

    const filteredUsers = users.filter((user) => {
        return user.firstname.toLowerCase().startsWith(searchTerm.toLowerCase());
    })

    const handleEditAccountAccess = async (accessChangeUser) => {
        const updatedAccessFromAPI = await updateUserAPI(accessChangeUser);
        setUsers((prevUsers) => prevUsers.map(user => 
            user.id === updatedAccessFromAPI.id ? updatedAccessFromAPI : user
        ))
    }

    const fetchUsers = async() => {
        try {
            const fetchedUsers = await getUsersAPI();
            const filteredUsers = fetchedUsers.filter(user => user.id !== userDetails.id); //removes current user
            setUsers(filteredUsers);
        } catch (error) {
            setError(error);
        }
    }

    useEffect(() => {
        fetchUsers();
    }, [])

    const handleUpdateUser = async (updatedUser) => {
        const updatedUserFromAPI = await updateUserAPI(updatedUser);
        setUsers((prevUsers) => prevUsers.map(user =>
            user.id === updatedUserFromAPI.id ? updatedUserFromAPI : user
        )); 
    }

    return (
        <section className="flex flex-col w-full h-full justify-start p-6 bg-white">
            <header className="flex justify-start text-3xl text-gray-800 w-full">Users List</header>
            <div className="flex justify-start mt-4">
                <input 
                    type="text"
                    value={searchTerm}
                    placeholder="Search for user..."
                    onChange={handleSearchTerm}
                    className="rounded-lg px-4 py-2 border border-gray-500 cursor-pointer"
                />
            </div>
            {filteredUsers.length > 0 ? (
                <>
                    <div className="grid grid-cols-4 bg-slate-200 mt-3">
                        <div className="flex justify-center border-b border-l border-t border-gray-500 px-3 py-2">Firstname</div> 
                        <div className="flex justify-center border-b border-l border-t border-gray-500 px-3 py-2">Lastname</div>
                        <div className="flex justify-center border-b border-l border-t border-gray-500 px-3 py-2">Account Access</div>
                        <div className="flex justify-center border border-gray-500 px-3 py-2">Actions</div>
                    </div>
                    {filteredUsers.map(user => (
                        <User key={user.id} user={user} onEditedAccess={handleEditAccountAccess} onUpdateUser={handleUpdateUser}/>
                    ))}
                </>
            ) : (
                <div className="flex justify-center text-3xl text-gray-800 mt-3">No users found.</div>
            )}
        </section>
    );
}