import axios from 'axios';

const baseURL = 'http://localhost:8000/api/';

export async function login(email, password) {
        const response = await axios.post(`${baseURL}users/login`, {
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

export async function register(username, email, password) {
    const response = await axios.post(`${baseURL}users/register`, {
        username,
        email,
        password,
    });
    const {  user } = response.data;
    return user;
}

export async function fetchUserData() {
    try {
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error('Token is missing');
        }

        const response = await axios.get(`${baseURL}users/me`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch user data');
    }
}