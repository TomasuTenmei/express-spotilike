const mongoose = require("mongoose");

const albumSchema = new mongoose.Schema({
    title: { type: String, required: true },
    pochette: { type: String, required: true },
    date_de_sortie: { type: String, required: true },
    liste_des_morceaux: { type: Array, required: true },
    artiste: { type: String, required: true }
});

module.exports = mongoose.model("Album", albumSchema);