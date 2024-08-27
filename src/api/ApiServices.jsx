import axios from "axios";

const API_URL = 'http://localhost:8080'  

export async function register(registerInfo) {
    return await axios.post(`${API_URL}/register`, registerInfo)
}

export async function login(loginInfo) {
    return await axios.post(`${API_URL}/login`, loginInfo)
}