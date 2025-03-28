const mongoose = require("mongoose");

const genreSchema = new mongoose.Schema({
    titre: { type: String, required: true },
    description: { type: String, required: true }
    },
    {timestamps: true}
);

module.exports = mongoose.model("genres", genreSchema);