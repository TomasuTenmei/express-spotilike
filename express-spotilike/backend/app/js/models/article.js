const mongoose = require("mongoose");

const albumSchema = new mongoose.Schema({
  title: { type: String, required: true },
  pochette: { type: String, required: true },
  date_de_sortie: { type: String, required: true },
  liste_des_morceaux: { type: Array, required: true },
  artiste: { type: String, required: true }
});

module.exports = mongoose.model("Album", albumSchema);

const artisteSchema = new mongoose.Schema({
  nom_artiste: { type: String, required: true },
  avatar: { type: String, required: true },
  biographie: { type: Array, required: true }
});

module.exports = mongoose.model("Artiste", artisteSchema);

const genreSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true }
});

module.exports = mongoose.model("Genre", genreSchema);

const morceauSchema = new mongoose.Schema({
  titre: { type: String, required: true },
  duree: { type: String, required: true },
  artiste: { type: String, required: true },
  genre: { type: String, required: true },
  album: { type: String, required: true }
});

module.exports = mongoose.model("Morceau", morceauSchema);

const utilisateurSchema = new mongoose.Schema({
  nom_utilisateur: { type: String, required: true },
  mot_de_passe: { type: String, required: true },
  email: { type: String, required: true }
});

module.exports = mongoose.model("Utilisateur", utilisateurSchema);