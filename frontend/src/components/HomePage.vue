<script>
import {mapGetters} from "vuex";
export default {
  name:'HomePage',
  computed: {
    ...mapGetters(['user'])
  },
}
</script>

<template>
  <div  v-if="user" class="greeting-box">
    <h2>Hello {{ user.username }},</h2>
    <h4>Welcome to Spotilike !</h4>
    <h6>Discover a universe of music at your fingertips.</h6>
    <h6>Explore albums, artists, and exclusive content.</h6>
  </div>
  <div v-if="!user" class="greeting-box">
    <h4>Welcome to Spotilike !</h4>
    <h6>Discover a universe of music at your fingertips.</h6>
    <h6><router-link to="/signup">Sign up now</router-link> to explore albums, artists, and exclusive content. </h6>
    <h6>Already a member? <router-link to="/login">Log in</router-link> to continue your musical journey.</h6>
  </div>
</template>

<style scoped>
.greeting-box {
  background-color: #e0e0e0;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
}
</style>