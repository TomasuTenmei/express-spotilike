<template>
  <div>
    <h1>Albums</h1>
    <ul>
      <li v-for="album in albums" :key="album.id">
        {{ album.titre }} - {{ album.artiste }}
      </li>
    </ul>
  </div>
</template>

<script>
import apiService from '@/services/apiService';

export default {
  data() {
    return {
      albums: []
    };
  },
  created() {
    apiService.getAlbums()
      .then(response => {
        this.albums = response.data; // Assuming the response contains the albums data
      })
      .catch(error => console.error('Error:', error));
  }
};
</script>