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
  <div class="greeting-box">
    <h2 v-if="user">Hello {{ user.username }},</h2>
    <h2 v-if="!user">You are not logged in !</h2>
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