const asyncHandler = require('express-async-handler')
const AlbumModel = require('../models/albumModel')

const getAlbums = asyncHandler(async (req, res) => {
    const albums = await AlbumModel.find()
    res.status(200).json(albums)
})

const getAlbum = asyncHandler(async (req, res) => {
    const album = await AlbumModel.findById(req.params.id)

    if (!album) {
        res.status(400)
        throw new Error('Album not found')
    }

    res.status(200).json(album)
})

const getAlbumSongs = asyncHandler(async (req, res) => {
    const album = await AlbumModel.findById(req.params.id)

    if (!album) {
        res.status(400)
        throw new Error('Album not found')
    }

    res.status(200).json(album.liste_des_morceaux)
})

const addAlbum = asyncHandler(async (req, res) => {
    if (! req.body.titre) {
        res.status(400)
        throw new Error('Please write a album')
    }

    const album = await AlbumModel.create({ titre: req.body.titre })
    res.json({ message: `Album: ${req.body.titre} added` })
})

const updateAlbum = asyncHandler(async (req, res) => {
    const album = await AlbumModel.findById(req.params.id)
    if (!album) {
        res.status(400)
        throw new Error('Album not found')
    }

    const updatedAlbum = await AlbumModel.findByIdAndUpdate(album, req.body)
    res.json({ album: `${req.body.titre} updated` })
})

const deleteAlbum = asyncHandler(async (req, res) => {
    const album = await AlbumModel.findById(req.params.id)
    if (!album) {
        res.status(400)
        throw new Error('Album not found')
    }

    const deletedAlbum = await AlbumModel.findByIdAndDelete(req.params.id)
    res.status(400).json(deletedAlbum)
})

module.exports = {
    getAlbums,
    getAlbum,
    getAlbumSongs,
    addAlbum,
    updateAlbum,
    deleteAlbum
}