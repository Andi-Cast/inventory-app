import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export default function RegisterForm({onRegister}) {

    const [registerInfo, setRegisterInfo] = useState({
        firstname: "",
        lastname: "",
        username: "",
        password: "",
        role: "MEMBER"
    })
    const [showPassword, setShowPassword] = useState(false);

    const onChange = (ev) => {
        setRegisterInfo({...registerInfo, [ev.target.name] : ev.target.value})
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return(
        <>
            <div className="flex flex-col justify-center">
                <div className="flex justify-start text-2xl text-gray-950">Create account</div>
                <div className="flex justify-start text-lg text-gray-800">Take control of your inventory</div>
            </div>
            <form 
                onSubmit={onRegister}
                className="flex flex-col w-full mt-4">
                <input 
                    type="text"
                    value={registerInfo.firstname}
                    name="firstname"
                    onChange={onChange}
                    placeholder="Firstname"
                    className="p-3 rounded-lg"
                    required
                />
                <input 
                    type="text"
                    value={registerInfo.lastname}
                    name="lastname"
                    onChange={onChange}
                    placeholder="Lastname"
                    className="p-3 rounded-lg mt-4"
                    required
                />
                <input 
                    type="email"
                    value={registerInfo.username}
                    name="username"
                    onChange={onChange}
                    placeholder="Email address"
                    className="p-3 rounded-lg mt-4"
                    required
                />
                <div className="relative mt-4">
                    <input 
                        type={showPassword ? "text" : "password"}
                        value={registerInfo.password}
                        name="password"
                        onChange={onChange}
                        placeholder="Password"
                        className="w-full p-3 border rounded-lg"
                        required
                    />
                    <button 
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute inset-y-0 right-0 px-3 py-2 flex items-center text-gray-500"
                    >
                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                    </button>
                </div>
                <button type="submit" className="bg-blue-500 text-white block w-full rounded-sm p-2 hover:bg-blue-700 mt-4">
                    Login
                </button>
            </form>
        </>
    )
}