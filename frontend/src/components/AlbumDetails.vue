<template>
  <div class="details-album">
    <h1>{{ album.titre }}</h1>
    <p class="artist">Artist: {{ album.artiste }}</p>
    <img class="album-cover" :src="album.pochette" alt="Album Cover" />
    <p class="release-date">Date de sortie: {{ album.date_de_sortie }}</p>

    <h2>Tracklist:</h2>
    <ul class="tracklist">
      <li v-for="(track, index) in album.liste_des_morceaux" :key="index">
        {{ index + 1 }}. {{ track }}
      </li>
    </ul>




  </div>
</template>

<script>
import apiService from '@/services/apiService';
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      album: {}
    };
  },
  mounted() {
    const albumId = this.$route.params.id;
      console.log(albumId)     
      apiService.getAlbumById(albumId)
        .then(response => {
          this.album = response.data;
          console.log(this.album);
          
        })
        .catch(error => console.error('Error:', error));
  }
});
</script>
<style scoped>
.details-album {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 24px;
  margin-bottom: 10px;
}

.artist,
.release-date {
  font-size: 16px;
  margin-bottom: 10px;
}

.tracklist {
  list-style: none;
  padding: 0;
}

.tracklist li {
  font-size: 14px;
  margin-bottom: 5px;
}

.album-cover {
  max-width: 100%;
  margin-top: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>