const mongoose = require("mongoose");

const albumSchema = new mongoose.Schema({
    titre: { type: String, required: true },
    pochette: { type: String, required: true },
    date_de_sortie: { type: String, required: true },
    liste_des_morceaux: { type: Array, required: true },
    artiste: { type: String, required: true }
    },
    {timestamps: true}
);

module.exports = mongoose.model("albums", albumSchema);