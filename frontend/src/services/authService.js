import axios from 'axios';
const baseURL = 'http://localhost:8000/api/'; // Replace with your actual API base URL

export async function login(email, password) {
    const response = await axios.post(`${baseURL}/api/users/login`, {
        email,
        password,
    });

    const { token, user } = response.data;
    localStorage.setItem('token', token);
    return user;
}

export function logout() {
    localStorage.removeItem('token');
}

export function isAuthenticated() {
    return localStorage.getItem('token') !== null;
}