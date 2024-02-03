<script >
import { login } from '@/services/authService';
export default {
  name:'LoginPage',
  data() {
    return{
      email:'',
      password:'',
    }

  },
  methods : {
    async handleSubmit(){
      try {
        const user = await login(this.email, this.password);
        console.log(user)
        this.$router.push('/');
      } catch (error) {
        console.log("couldn't complete login !")
        console.error(error);
      }
    }
  }

}
</script>

<template>
  <div class="row">
    <div class="col-md-6 offset-md-3">
    </div>
  </div>
<div>
  <div> <h3>Login</h3>
  <hr/></div>
  <form @submit.prevent="handleSubmit">
    <div class="form-group">
      <label>Email address</label>
      <input type="email" class="form-control" v-model="email" aria-describedby="emailHelp" placeholder="Enter email">

    </div>
    <div class="form-group">
      <label >Password</label>
      <input type="password" class="form-control"  v-model="password" placeholder="Password">
    </div>
    <button type="submit" class="btn btn-primary">Login</button>
  </form>
</div>
</template>

<style scoped>

</style>