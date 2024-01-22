const mongoose = require("mongoose");

const morceauSchema = new mongoose.Schema({
    titre: { type: String, required: true },
    duree: { type: String, required: true },
    artiste: { type: String, required: true },
    genre: { type: String, required: true },
    album: { type: String, required: true }
    },
    {collection: "morceaux"},
    {timestamps: true}
);

module.exports = mongoose.model("morceaux", morceauSchema);