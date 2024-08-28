import axios from "axios";

const API_URL = 'http://localhost:8080'  

export async function register(registerInfo) {
    return await axios.post(`${API_URL}/register`, registerInfo)
}

export async function login(loginInfo) {
    return await axios.post(`${API_URL}/login`, loginInfo)
}

export async function getProducts() {
    const token = sessionStorage.getItem("jwt");
    if(!token) {
        throw new Error("New token found");
    }
    try {
        const response = await axios.get(`${API_URL}/api/products/getProducts`, {
            headers: {
                "Authorization" : `Bearer ${token}`
            }
        })  
        return response.data;
    } catch (error) {
        console.error("Failed to fetch products: ", error);
        throw error;
    }
}