<script>
import {fetchUserData} from "@/services/authService";

export default {
  data() {
    return {
      username: '',
    };
  },
  async mounted() {
    if (localStorage.getItem('token')) {
      try {
        const userData = await fetchUserData();
        this.username = userData.username;
      } catch (error) {
        console.log("can't find the logged in user!")
        console.error(error);
      }
    }
  },
};
</script>

<template>
  <div class="greeting-box">
    <h2 v-if="username">Hello {{ username }},</h2>
    <h2 v-if="!username">You are not logged in !</h2>
    <h5>Welcome to Spotilike app !</h5>
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