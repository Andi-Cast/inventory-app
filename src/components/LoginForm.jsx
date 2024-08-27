import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export default function LoginForm({onLogin}) {

    const [loginInfo, setLoginInfo] = useState({
        username: "",
        password: ""
    });
    const [showPassword, setShowPassword] = useState(false);

    const onChange = (ev) => {
        setLoginInfo({...loginInfo, [ev.target.name] : ev.target.value})
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <>
            <div className="flex flex-col justify-center">
                <div className="flex justify-start text-2xl text-gray-950">Sign in</div>
                <div className="flex justify-start text-lg text-gray-800">Stay updated on your inventory</div>
            </div>
            <form 
                onSubmit={onLogin}
                className="flex flex-col w-full mt-4">
                <input 
                    type="email" 
                    value={loginInfo.username}
                    name="username"
                    onChange={onChange}
                    placeholder="Email address"
                    className="p-3 rounded-lg"
                />
                <div className="relative mt-4">
                    <input 
                        type={showPassword ? "text" : "password"}
                        value={loginInfo.password}
                        name="password"
                        onChange={onChange}
                        placeholder="Password"
                        className="w-full p-3 border rounded-lg"
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