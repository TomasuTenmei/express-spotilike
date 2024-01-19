const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 8000;

// Connexion à MongoDB
mongoose.connect("mongodb://localhost:27017/Spotilike", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connecté à MongoDB");
}).catch(err => {
  console.error("Erreur de connexion à MongoDB", err);
});

// Middleware pour traiter les requêtes JSON
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send("Bienvenue sur l'API Spotilike");
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});

// EXEMPLE de routes pour manipuler les données

const Article = require("./models/article");

// Créer un article
app.post("/articles", async (req, res) => {
  try {
    const article = new Article(req.body);
    await article.save();
    res.status(201).json(article);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Obtenir tous les articles
app.get("/articles", async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Obtenir un article spécifique
app.get("/articles/:id", async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) {
      return res.status(404).json({ message: "Article introuvable" });
    }
    res.json(article);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Mettre à jour un article
app.patch("/articles/:id", async (req, res) => {
  try {
    const article = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!article) {
      return res.status(404).json({ message: "Article introuvable" });
    }
    res.json(article);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Supprimer un article
app.delete("/articles/:id", async (req, res) => {
  try {
    const article = await Article.findByIdAndDelete(req.params.id);
    if (!article) {
      return res.status(404).json({ message: "Article introuvable" });
    }
    res.json({ message: "Article supprimé avec succès" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
