const asyncHandler = require('express-async-handler')
const ArtisteModel = require('../models/artisteModel')

const getArtistes = asyncHandler(async (req, res) => {
    const artistes = await ArtisteModel.find()
    res.status(200).json(artistes)
})

const getArtiste = asyncHandler(async (req, res) => {
    const artiste = await ArtisteModel.findById(req.params.id)

    if (!artiste) {
        res.status(400)
        throw new Error('Artiste not found')
    }

    res.status(200).json(artiste)
})

const addArtiste = asyncHandler(async (req, res) => {
    if (! req.body.nom) {
        res.status(400)
        throw new Error('Please write a artiste')
    }

    const artiste = await ArtisteModel.create({ nom: req.body.nom })
    res.json({ message: `Artiste: ${req.body.nom} added` })
})

const updateArtiste = asyncHandler(async (req, res) => {
    const artiste = await ArtisteModel.findById(req.params.id)
    if (!artiste) {
        res.status(400)
        throw new Error('Artiste not found')
    }

    const updatedArtiste = await ArtisteModel.findByIdAndUpdate(artiste, req.body)
    res.json({ artiste: `${req.body.nom} updated` })
})

const deleteArtiste = asyncHandler(async (req, res) => {
    const artiste = await ArtisteModel.findById(req.params.id)
    if (!artiste) {
        res.status(400)
        throw new Error('Artiste not found')
    }

    const deletedArtiste = await ArtisteModel.findByIdAndDelete(req.params.id)
    res.status(400).json(deletedArtiste)
})

module.exports = {
    getArtistes,
    getArtiste,
    addArtiste,
    updateArtiste,
    deleteArtiste
}
