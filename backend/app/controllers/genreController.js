const asyncHandler = require('express-async-handler')
const GenreModel = require('../models/genreModel')

const getGenres = asyncHandler(async (req, res) => {
    const genres = await GenreModel.find()
    res.status(200).json(genres)
})

const getGenre = asyncHandler(async (req, res) => {
    const genre = await GenreModel.findById(req.params.id)

    if (!genre) {
        res.status(400)
        throw new Error('Genre not found')
    }

    res.status(200).json(genre)
})

const addGenre = asyncHandler(async (req, res) => {
    if (! req.body.nom) {
        res.status(400)
        throw new Error('Please write a genre')
    }

    const genre = await GenreModel.create({ nom: req.body.nom })
    res.json({ message: `Genre: ${req.body.nom} added` })
})

const updateGenre = asyncHandler(async (req, res) => {
    const genre = await GenreModel.findById(req.params.id)
    if (!genre) {
        res.status(400)
        throw new Error('Genre not found')
    }

    const updatedGenre = await GenreModel.findByIdAndUpdate(genre, req.body)
    res.json({ genre: `${req.body.nom} updated` })
})

const deleteGenre = asyncHandler(async (req, res) => {
    const genre = await GenreModel.findById(req.params.id)
    if (!genre) {
        res.status(400)
        throw new Error('Genre not found')
    }

    const deletedGenre = await GenreModel.findByIdAndDelete(req.params.id)
    res.status(400).json(deletedGenre)
})

module.exports = {
    getGenres,
    getGenre,
    addGenre,
    updateGenre,
    deleteGenre
}
