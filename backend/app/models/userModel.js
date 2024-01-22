const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    nom_utilisateur: { type: String, required: [true, 'Please add an username'] },
    mot_de_passe: { type: String, required: [true, 'Please add an email'], unique: true },
    email: { type: String, required: [true, 'Please add a password'] }
    }, 
    { timestamps: true }
);

module.exports = mongoose.model('User', userSchema)