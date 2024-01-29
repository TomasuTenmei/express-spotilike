// router/index.js
import AlbumList from '../components/AlbumList.vue';
import AlbumDetails from '../components/AlbumDetails.vue';
import ArtistList from "../components/ArtistList.vue";
import ArtistDetails from "../components/ArtistDetails.vue";


const routes = [
    { path: '/', component: AlbumList },
    { path: '/albums', component: AlbumList },
    { path: '/albums/:id', name: "albumDetails", component: AlbumDetails },
    {path: '/artistes', component: ArtistList},
    {path: '/artistes/:id', name:"artistDetails",component: ArtistDetails},

];

export default routes;