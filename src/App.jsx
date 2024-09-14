import { UserContextProvider } from "./components/UserContext"
import Routes from "./components/Routes"
import axios from "axios"

function App() {
  
  axios.defaults.baseURL = "http://localhost:5173";
  axios.defaults.withCredentials = true;

  return (
    <div className="flex justify-center items-center bg-slate-400 h-svh">
      <UserContextProvider>
        <Routes/>
      </UserContextProvider>
    </div>
  )
}

export default App
