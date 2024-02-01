<template>
  <div class="artist-details">
    <div class="artist-header">
      <img :src="artist.avatar" alt="Artist Avatar" class="avatar" />
      <div class="artist-info">
        <h1>{{ artist.nom_artiste }}</h1>
        <p class="bio">{{ artist.biographie }}</p>
      </div>
    </div>
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
<style scoped>
.artist-details {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.artist-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 20px;
}

.artist-info h1 {
  font-size: 24px;
  margin-bottom: 10px;
}

.bio {
  font-size: 16px;
  line-height: 1.5;
}

</style>