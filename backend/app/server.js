const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 8000

// Connexion à MongoDB
const connectDB = require('./config/db')
connectDB()

// Initialisation d'Express
const app = express()

// Accepter les données envoyées par formulaire
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/api/albums', require('./routes/albumRoutes'))
app.use('/api/artistes', require('./routes/artisteRoutes'))
app.use('/api/genres', require('./routes/genreRoutes'))
app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/morceaux', require('./routes/morceauRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

// Serveur
app.listen(port, () => {
    console.log(`Server started on ${port}`)
})

//const app = express();
//const PORT = process.env.PORT || 8000;
//
//// Connexion à MongoDB
//mongoose.connect("mongodb://localhost:27017/Spotilike", {
//  useNewUrlParser: true,
//  useUnifiedTopology: true
//}).then(() => {
//  console.log("Connecté à MongoDB");
//}).catch(err => {
//  console.error("Erreur de connexion à MongoDB", err);
//});
//
//// Middleware pour traiter les requêtes JSON
//app.use(express.json());
//
//// Routes
//app.get('/', (req, res) => {
//  res.send("Bienvenue sur l'API Spotilike");
//});
//
//app.use('/api/goals', require('./routes/goalRoutes'))
//app.use('/api/users', require('./routes/userRoutes'))
//
//// Lancer le serveur
//app.listen(PORT, () => {
//  console.log(`Serveur en écoute sur le port ${PORT}`);
//});
//
//// Routes pour manipuler les données
//const Album = require("./models/albumModel");
//const Artiste = require("./models/artisteModel");
//const Genre = require("./models/genreModel");
//const Morceau = require("./models/morceauModel");
//const User = require("./models/userModel");
//
////1. GET - /api/albums : Récupère la liste de tous les albums
////2. GET - /api/albums/:id : Récupère les détails de l’album précisé par :id
////3. GET - /api/albums/:id/songs : Récupère les morceaux de l’album précisé par :id
////4. GET - /api/genres : Récupère la liste de tous les genres
////5. GET - /api/artists/:id/songs : Récupère la liste de tous les morceaux de l’artiste précisé par :id
////6. POST - /api/users/signup : Ajout d’un utilisateur
////7. POST - /api/users/login : Connexion d’un utilisateur (JWT)
////8. POST - /api/albums : Ajout d’un album
////9. POST - /api/albums/:id/songs : Ajout d’un morceau dans l’album précisé par :id
////10. PUT - /api/artists/:id : Modification de l’artiste précisé par :id
////11. PUT - /api/albums/:id : Modification de l’album précisé par :id
////12. PUT - /api/genres/:id : Modification du genre précisé par :id
////13. DELETE - /api/users/:id : Suppression de utilisateur précisé par :id
////14. DELETE - /api/albums/:id : Suppression de l’album précisé par :id
////15. DELETE - /api/artists/:id : Supression de l’artiste précisé par :id