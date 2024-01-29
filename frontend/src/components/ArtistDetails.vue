<template>
  <div>
    <h1>{{ artist.nom_artiste }}</h1>
    <p>{{ artist.biographie }}</p>
    <!-- Other album details here -->
  </div>
</template>

<script>
import apiService from '@/services/apiService';
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      artist: {}
    };
  },
  mounted() {
    const artistId = this.$route.params.id;
    console.log(artistId)
    apiService.getArtistById(artistId)
        .then(response => {
          this.artist = response.data;
          console.log(this.artist);

        })
        .catch(error => console.error('Error:', error));
  }
});
</script>
