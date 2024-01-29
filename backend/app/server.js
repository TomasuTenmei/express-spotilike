const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const cors = require('cors');
const port = process.env.PORT || 8000

// Connexion à MongoDB
const connectDB = require('./config/db')
connectDB()

// Initialisation d'Express
const app = express()

// Accepter les données envoyées par formulaire
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors());


// Routes
app.use('/api/albums', require('./routes/albumRoutes'))
app.use('/api/artistes', require('./routes/artisteRoutes'))
app.use('/api/genres', require('./routes/genreRoutes'))
app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/morceaux', require('./routes/morceauRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

// Serveur
app.listen(port, () => {
    console.log(`Server started on ${port}`.blue)
})
