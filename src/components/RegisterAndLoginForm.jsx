import { useContext } from "react";
import { useState } from "react"
import { UserContext } from "./UserContext";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";



export default function RegisterAndLoginForm() {
    const [status, setStatus] = useState("login");
    const {setLoggedInUsername, setLoggedInPassword} = useContext(UserContext)

    async function handleRegister(registerInfo) {
        ev.preventDefault(); 
        console.log("registering user")
        console.log(`username: ${registerInfo.username}`)
        console.log(`password: ${registerInfo.password}`)
    }

    async function handleLogin(loginInfo) {
        ev.preventDefault(); 
        console.log("logining in user.")
        console.log(`username: ${loginInfo.username}`)
        console.log(`password: ${loginInfo.password}`)
    }

    return(
       <div className="flex flex-col w-1/3 h-1/2 mt-6 px-8 py-5 shadow-lg bg-slate-100">
            {status === "login" && (
                <LoginForm onLogin={handleLogin}/>
            )}
            {status === "register" && (
                <RegisterForm onRegister={handleRegister}/>
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