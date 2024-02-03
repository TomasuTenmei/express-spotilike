<script >

import {register} from "@/services/authService";

export default {
  name:'SignUpPage',
  data(){
    return{
      username:'',
      email:'',
      password:'',
    }
  },
  methods:{
    async handleSubmit(){
      try {
        const user = await register(this.username,this.email, this.password);
        console.log(user)
        this.$router.push('/login');
      } catch (error) {
        console.log("couldn't complete registration !")
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
    <div> <h3>Sign up</h3>
      <hr/></div>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label>Username</label>
        <input type="text" class="form-control" v-model="username" placeholder="Enter username">
      </div>
      <div class="form-group">
        <label>Email address</label>
        <input type="email" class="form-control" v-model="email" placeholder="Enter email">
      </div>
      <div class="form-group">
        <label >Password</label>
        <input type="password" class="form-control" v-model="password" placeholder="Password">
      </div>
      <button type="submit" class="btn btn-primary">Sign up</button>
    </form>
  </div>
</template>

<style scoped>

</style>