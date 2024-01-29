<template>
  <div class="album-list">
    <h1>Albums</h1>
    <ul>
      <li v-for="album in albums" :key="album._id">
        {{ album.titre }} - {{ album.artiste }}
        <router-link :to="{name: 'albumDetails', params: {id: album._id}}">View Details</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import apiService from '@/services/apiService';
import { defineComponent } from 'vue';

export default  defineComponent({
  data() {
    return {
      albums: []
    };
  },
  
  mounted() {
    apiService.getAlbums()
      .then(response => {
        this.albums = response.data; 
        console.log(this.albums)
      })
      .catch(error => console.error('Error:', error));
  }
});
</script>



<style scoped>
.album-list {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.album-list h1 {
  text-align: center;
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
}

.album-list ul {
  list-style: none;
  padding: 0;
}

.album-list li {
  padding: 10px;
  border-bottom: 1px solid #ddd;
  color: #333;
  font-size: 18px;
  transition: background-color 0.3s;
}

.album-list li:hover {
  background-color: #e9e9e9;
}
</style>