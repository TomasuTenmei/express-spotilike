const asyncHandler = require('express-async-handler')
const MorceauModel = require('../models/morceauModel')

const getMorceaux = asyncHandler(async (req, res) => {
    const morceaux = await MorceauModel.find()
    res.status(200).json(morceaux)
})

const getMorceau = asyncHandler(async (req, res) => {
    const morceau = await MorceauModel.findById(req.params.id)

    if (!morceau) {
        res.status(400)
        throw new Error('Morceau not found')
    }

    res.status(200).json(morceau)
})

const addMorceau = asyncHandler(async (req, res) => {
    if (! req.body.titre) {
        res.status(400)
        throw new Error('Please write a morceau')
    }

    const morceau = await MorceauModel.create({ titre: req.body.titre })
    res.json({ message: `Morceau: ${req.body.titre} added` })
})

const updateMorceau = asyncHandler(async (req, res) => {
    const morceau = await MorceauModel.findById(req.params.id)
    if (!morceau) {
        res.status(400)
        throw new Error('Morceau not found')
    }

    const updatedMorceau = await MorceauModel.findByIdAndUpdate(morceau, req.body)
    res.json({ morceau: `${req.body.titre} updated` })
})

const deleteMorceau = asyncHandler(async (req, res) => {
    const morceau = await MorceauModel.findById(req.params.id)
    if (!morceau) {
        res.status(400)
        throw new Error('Morceau not found')
    }

    const deletedMorceau = await MorceauModel.findByIdAndDelete(req.params.id)
    res.status(400).json(deletedMorceau)
})

module.exports = {
    getMorceaux,
    getMorceau,
    addMorceau,
    updateMorceau,
    deleteMorceau
}
