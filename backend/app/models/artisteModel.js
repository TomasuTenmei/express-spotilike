const mongoose = require("mongoose");

const artisteSchema = new mongoose.Schema({
    nom_artiste: { type: String, required: true },
    avatar: { type: String, required: true },
    biographie: { type: Array, required: true }
});

module.exports = mongoose.model("Artiste", artisteSchema);