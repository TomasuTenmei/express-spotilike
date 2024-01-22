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
    const { title, pochette, date_de_sortie, liste_des_morceaux, artiste } = req.body;

    // Check if at least one field is provided for the update
    if (!title && !pochette && !date_de_sortie && !liste_des_morceaux && !artiste) {
        res.status(400);
        throw new Error('Please provide at least one field to update for the album');
    }

    const album = await AlbumModel.findById(req.params.id);

    if (!album) {
        res.status(400);
        throw new Error('Album not found');
    }

    try {
        // Update only the fields that are provided in the request body
        const updatedAlbum = await AlbumModel.findByIdAndUpdate(
            req.params.id,
            {
                ...(title && { title }),
                ...(pochette && { pochette }),
                ...(date_de_sortie && { date_de_sortie }),
                ...(liste_des_morceaux && { liste_des_morceaux }),
                ...(artiste && { artiste }),
            },
            { new: true }
        );

        res.json({ message: `Album '${updatedAlbum.title}' updated`, data: updatedAlbum });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
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