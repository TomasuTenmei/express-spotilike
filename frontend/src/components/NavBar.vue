<template>
  <nav class="navbar navbar-expand navbar-light " >
    <div class="container">
      <router-link class ="nav-link" to="/">Home</router-link>
      <router-link class ="nav-link" to="/albums">Albums</router-link>
      <router-link class ="nav-link" to="/artistes">Artists</router-link>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class ="nav-link" to="/login">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link class ="nav-link" to="/signup">Sign Up</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>

</script>
<style scoped>

</style>