<template>
  <nav-bar/>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>

</template>

<script >
import NavBar from "@/components/NavBar.vue";
import {fetchUserData} from "@/services/authService";
export default {
  name:'App',
  components:{
    NavBar,
  },
  async mounted() {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await fetchUserData();
          this.username = response.username;
          this.$store.dispatch('user', response);
        } catch (error) {
          console.error('Failed to find out logged user', error);
        }
      } else {
        console.log('No user is logged in.');
      }
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
