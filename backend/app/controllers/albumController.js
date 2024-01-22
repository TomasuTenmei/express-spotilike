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

const addAlbum = asyncHandler(async (req, res) => {
    const { title, pochette, date_de_sortie, liste_des_morceaux, artiste } = req.body;

    // Check if required fields are present
    if (!title || !pochette || !date_de_sortie || !liste_des_morceaux || !artiste) {
        res.status(400);
        throw new Error('Please provide all required fields for the album');
    }

    try {
        const album = await AlbumModel.create({
            title,
            pochette,
            date_de_sortie,
            liste_des_morceaux,
            artiste,
        });

        res.status(201).json({ message: `Album '${title}' added`, data: album });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

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
    addAlbum,
    updateAlbum,
    deleteAlbum
}