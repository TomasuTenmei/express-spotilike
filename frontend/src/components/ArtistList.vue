<template>
  <div class="artist-list">
    <h1>Artists</h1>
    <ul>
      <li v-for="artist in artists" :key="artist._id" class="artist-item" >
        <img :src="artist.avatar" alt="Artist Avatar" class="avatar" />
        <div class="artist-info">
          <span class="artist-name">{{ artist.nom_artiste }}</span>
          <router-link :to="{ name: 'artistDetails', params: { id: artist._id } }">View Details</router-link>
        </div>
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
      artists: []
    };
  },

  mounted() {
    apiService.getArtists()
        .then(response => {
          this.artists = response.data;
          console.log(this.artists)
        })
        .catch(error => console.error('Error:', error));
  }
});
</script>



<style scoped>
.artist-list {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.artist-list h1 {
  text-align: center;
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
}

.artist-list ul {
  list-style: none;
  padding: 0;
}

.artist-item {
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  color: #333;
  font-size: 18px;
  transition: background-color 0.3s;
}

.artist-item:hover {
  background-color: #e9e9e9;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.artist-info {
  display: flex;
  flex-direction: column;
}
</style>