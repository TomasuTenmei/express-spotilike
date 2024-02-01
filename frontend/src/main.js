import { createApp } from 'vue';
import App from './App.vue';
import * as VueRouter from 'vue-router'
import routes from "@/router";



const app = createApp(App);
app.use(VueRouter.createRouter({history: VueRouter.createWebHistory(), routes}))
app.mount('#app');
