// services/apiService.js
import axios from 'axios';
const apiClient = axios.create({
  baseURL: 'http://localhost:8000/api/',
  withCredentials: false,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

export default {
  getAlbums() {
    return apiClient.get('/albums');
  },
  getAlbumById(id) {
    return apiClient.get(`/albums/${id}`);
  },
  getArtists(){
    return apiClient.get('/artistes');
  },
  getArtistById(id) {
    return apiClient.get(`/artistes/${id}`);
  },
};
