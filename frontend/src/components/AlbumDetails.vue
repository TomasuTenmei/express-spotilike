<template>
  <div>
    <h1>{{ album.titre }}</h1>
    <p>Artist: {{ album.artiste }}</p>
    <!-- Other album details here -->
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
