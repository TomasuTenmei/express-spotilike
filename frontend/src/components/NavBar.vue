<template>
  <nav class="navbar navbar-expand navbar-light " >
    <div class="container">
      <router-link class ="nav-link" to="/">Home</router-link>
      <router-link class ="nav-link" to="/albums">Albums</router-link>
      <router-link class ="nav-link" to="/artistes">Artists</router-link>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto" v-if="!user">
          <li class="nav-item">
            <router-link class ="nav-link" to="/login">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link class ="nav-link" to="/signup">Sign Up</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto" v-if="user">
          <li class="nav-item">
            <a  href="javascript:void(0)" @click="handleClick" class="nav-link">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script >
import { logout } from '@/services/authService';
import {mapGetters} from "vuex";

export default {
  name: 'NavBar',
  methods: {
    async handleClick() {
      try {
        await logout();
        this.$store.dispatch('user',null)
        this.$router.push('/');
      } catch (error) {
        console.error('Failed to log out', error);
      }
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
}

</script>
<style scoped>

</style>