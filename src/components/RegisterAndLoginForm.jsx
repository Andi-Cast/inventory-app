import { useContext } from "react";
import { useState } from "react"
import { UserContext } from "./UserContext";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import { login, register } from "../api/ApiServices";



export default function RegisterAndLoginForm() {
    const [status, setStatus] = useState("login");
    const { login: contextLogin, logout: contextLogout } = useContext(UserContext)

    async function handleRegister(registerInfo, ev) {
        ev.preventDefault(); 
        try {
            const response = await register(registerInfo);
            contextLogin(response.data);
        } catch (error) {
            console.log("Failed to register: ", error);
        }
    }

    async function handleLogin(loginInfo, ev) {
        ev.preventDefault(); 
        try {
            const response = await login(loginInfo)
            console.log(response.data);
            contextLogin(response.data);
        } catch (error) {
            console.log("Failed to login: ", error);
        }
    }

    return(
       <div className="flex flex-col w-1/3 h-1/2 mt-6 px-8 py-5 shadow-lg bg-slate-100 rounded-lg">
            {status === "login" && (
                <LoginForm onLogin={(loginInfo, ev) => handleLogin(loginInfo, ev)}/>
            )}
            {status === "register" && (
                <RegisterForm onRegister={(registerInfo, ev) => handleRegister(registerInfo, ev)}/>
            )}
            <div className="text-center mt-2">
                {status === 'register' && (
                    <div> 
                        Already a member? 
                        <button className='ml-1 text-blue-600 underline hover:text-blue-800' onClick={() => setStatus('login')}>
                            Login Here
                        </button>
                    </div>
                )} 
                {status === 'login' && (
                    <div> 
                        Don't have an account?
                        <button className='ml-1 text-blue-600 underline hover:text-blue-800' onClick={() => setStatus('register')}>
                            Create Account Here
                        </button>
                    </div>
                )}
            </div>
       </div>
    )
}