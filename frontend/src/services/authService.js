import axios from 'axios';

const baseURL = 'http://localhost:8000/api/';

export async function login(email, password) {
        const response = await axios.post(`${baseURL}users/login`, {
            email,
            password,
        });
        const token = response.data;
        localStorage.setItem('token', token);
        return response.data;

}
export function logout() {
    localStorage.removeItem('token');
}

export async function register(username, email, password) {
    const response = await axios.post(`${baseURL}users/register`, {
        username,
        email,
        password,
    });
    return response.data;
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