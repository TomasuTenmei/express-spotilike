const mongoose = require("mongoose");

// EXEMPLE ! A MODIFIER !
const articleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true }
});

module.exports = mongoose.model("Article", articleSchema);
