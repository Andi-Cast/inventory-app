import { useContext, useState } from "react";
import { UserContext } from "./UserContext";
import { updateUserAPI } from "../api/ApiServices";

export default function EditProfilePage() {

    const { userDetails, setUserDetails } = useContext(UserContext);
    const [editedUser, setEditedUser] = useState({
        id: userDetails.id,
        firstname: userDetails.firstname,
        lastname: userDetails.lastname,
        username: userDetails.username
    });

    const handleUpdateProfile = async (ev) => {
        ev.preventDefault();
        try {
            const updatedUserFromAPI = await updateUserAPI(editedUser);

            // Update userDetails in UserContext with updated data
            setUserDetails({
                ...userDetails,
                firstname: updatedUserFromAPI.firstname,
                lastname: updatedUserFromAPI.lastname,
                username: updatedUserFromAPI.username
            });
        } catch (error) {
            console.log("Error updating profile: ", error);
        }
    };

    const handleChange = (ev) => {
        setEditedUser({ ...editedUser, [ev.target.name]: ev.target.value });
    };

    return (
        <section className="flex flex-col w-full h-full justify-start p-6 bg-white">
            <header className="flex justify-start text-3xl text-gray-800 w-full">Edit Profile</header>

            <form onSubmit={handleUpdateProfile} className="flex flex-col">
                <label className="font-medium text-gray-700 mt-2">Firstname</label>
                <input
                    type="text"
                    name="firstname"
                    value={editedUser.firstname}
                    onChange={handleChange}
                    placeholder="Firstname"
                    className="p-2 mb-4 rounded-lg border border-gray-300 cursor-pointer"
                    required
                />

                <label className="font-medium text-gray-700 mt-2">Lastname</label>
                <input
                    type="text"
                    name="lastname"
                    value={editedUser.lastname}
                    onChange={handleChange}
                    placeholder="Lastname"
                    className="p-2 mb-4 rounded-lg border border-gray-300 cursor-pointer"
                    required
                />

                <label className="font-medium text-gray-700 mt-2">Username</label>
                <input
                    type="email"
                    name="username" // Fixed the name attribute
                    value={editedUser.username}
                    onChange={handleChange}
                    placeholder="Username"
                    className="p-2 mb-4 rounded-lg border border-gray-300 cursor-pointer"
                    required
                />          

                <button type="submit" className="bg-blue-500 text-white p-2 mt-2 rounded-lg hover:bg-blue-700">
                    Update Profile
                </button>
            </form>
        </section>
    );
}
