// router/index.js
import AlbumList from '../components/AlbumList.vue';
import AlbumDetails from '../components/AlbumDetails.vue';
import ArtistList from "../components/ArtistList.vue";
import ArtistDetails from "../components/ArtistDetails.vue";
import Login from "../components/LoginPage.vue";
import SignUp from "../components/SignUpPage.vue";
import HomePage from "../components/HomePage.vue";



const routes = [
    { path: '/', component: HomePage },
    { path: '/albums', component: AlbumList },
    { path: '/albums/:id', name: "albumDetails", component: AlbumDetails },
    {path: '/artistes', component: ArtistList},
    {path: '/artistes/:id', name:"artistDetails",component: ArtistDetails},
    {path:'/login', component: Login},
    {path:'/signup', component: SignUp},

];

export default routes;