// services/apiService.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8000/api/', // Your backend server URL
  withCredentials: false,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

export default {
  getAlbums() {
    return apiClient.get('/albums');
  }
};
