const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: { type: String, required: [true, 'Please add an username'] },
    password: { type: String, required: [true, 'Please add an email'], unique: true },
    email: { type: String, required: [true, 'Please add a password'] }
    }, 
    { timestamps: true }
);

module.exports = mongoose.model('users', userSchema)