import axios from "axios";

const API_URL = 'http://localhost:8080'  

export async function register(registerInfo) {
    return await axios.post(`${API_URL}/register`, registerInfo)
}

export async function login(loginInfo) {
    return await axios.post(`${API_URL}/login`, loginInfo)
}

export async function getProductsAPI() {
    const token = sessionStorage.getItem("jwt");
    if(!token) {
        throw new Error("No token found");
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

export async function addProductAPI(newProduct) {
    const token = sessionStorage.getItem("jwt");
    if(!token) {
        throw new Error("No token found");
    }
    try {
        const response = await axios.post(`${API_URL}/api/products/addProduct`, newProduct, {
            headers: {
                "Authorization" : `Bearer ${token}`,
                "Content-Type" : "application/json"
            }
        })  
        return response.data;
    } catch (error) {
        console.error("Failed to add product: ", error);
        throw error;
    }
}

export async function deleteProductAPI(productId) {
    const token = sessionStorage.getItem("jwt");
    if(!token) {
        throw new Error("No token found");
    }
    try {
        const response = await axios.delete(`${API_URL}/api/products/delete/id=${productId}`, {
            headers: {
                "Authorization" : `Bearer ${token}`
            }
        })  
        return response.data;
    } catch (error) {
        console.error("Failed to delete product: ", error);
        throw error;
    }
}

export async function updateProductAPI(updatedProduct) {
    const token = sessionStorage.getItem("jwt");
    if(!token) {
        throw new Error("No token found");
    }
    try {
        const response = await axios.post(`${API_URL}/api/products/update/id=${updatedProduct.id}`, updatedProduct, {
            headers : {
                "Authorization" : `Bearer ${token}`,
                "Content-Type" : "application/json"
            }
        })
        return response.data;
    } catch (error) {
        console.error("Failed to update product: ", error);
        throw error;
    }
}

export async function applyCategoryFilterAPI(category) {
    const token = sessionStorage.getItem("jwt");
    if(!token) {
        throw new Error("No token found");
    }
    try {
        const response = await axios.get(`${API_URL}/api/products/category=${category}`, {
            headers: {
                "Authorization" : `Bearer ${token}`
            }
        })
        return response.data;
    } catch (error) {
        console.error("Failed to apply filter: ", error);
        throw error;
    }
}

export async function getUsersAPI() {
    const token = sessionStorage.getItem("jwt");
    if(!token) {
        throw new Error("No token found");
    }
    try {
        const response = await axios.get(`${API_URL}/api/users/getUsers`, {
            headers: {
                "Authorization" : `Bearer ${token}`
            }
        })  
        return response.data;
    } catch (error) {
        console.error("Failed to fetch users: ", error);
        throw error;
    }
}

export async function updateUserAPI(updatedUser) {
    const token = sessionStorage.getItem("jwt");
    if(!token) {
        throw new Error("No token found");
    }
    try {
        const response = await axios.put(`${API_URL}/api/users/update/${updatedUser.id}`, updatedUser, {
            headers : {
                "Authorization" : `Bearer ${token}`,
                "Content-Type" : "application/json"
            }
        })
        return response.data;
    } catch (error) {
        console.error("Failed to update user: ", error);
        throw error;
    }
}

export async function deleteUserAPI(userId) {
    const token = sessionStorage.getItem("jwt");
    if(!token) {
        throw new Error("No token found");
    }
    try {
        const response = await axios.delete(`${API_URL}/api/users/delete/${userId}`, {
            headers: {
                "Authorization" : `Bearer ${token}`
            }
        })  
        return response.data;
    } catch (error) {
        console.error("Failed to delete user: ", error);
        throw error;
    }
}