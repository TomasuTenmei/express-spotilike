const mongoose = require("mongoose");

const utilisateurSchema = new mongoose.Schema({
  nom_utilisateur: { type: String, required: true },
  mot_de_passe: { type: String, required: true },
  email: { type: String, required: true }
});

module.exports = mongoose.model("Utilisateur", utilisateurSchema);