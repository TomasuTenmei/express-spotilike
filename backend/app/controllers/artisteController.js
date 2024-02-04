const asyncHandler = require('express-async-handler')
const ArtisteModel = require('../models/artisteModel')
const MorceauModel = require('../models/morceauModel')
const AlbumModel = require('../models/albumModel')

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

const getArtisteSongs = asyncHandler(async (req, res) => {
    const artiste = await ArtisteModel.findById(req.params.id)

    if (!artiste) {
        res.status(400)
        throw new Error('Artiste not found')
    }

    const morceaux = await MorceauModel.find({ artiste: artiste.nom_artiste })
    res.status(200).json(morceaux)
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
    const { nom_artiste, avatar, biographie } = req.body;

    // Check if at least one field is provided for the update
    if (!nom_artiste && !avatar && !biographie) {
        res.status(400);
        throw new Error('Please provide at least one field to update for the artiste');
    }

    const artiste = await ArtisteModel.findById(req.params.id);

    if (!artiste) {
        res.status(400);
        throw new Error('Artiste not found');
    }

    try {
        // Update only the fields that are provided in the request body
        const updatedArtiste = await ArtisteModel.findByIdAndUpdate(
            req.params.id,
            {
                ...(nom_artiste && { nom_artiste }),
                ...(avatar && { avatar }),
                ...(biographie && { biographie }),
            },
            { new: true }
        );

        res.json({ message: `Artiste '${updatedArtiste.nom_artiste}' updated`, data: updatedArtiste });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

// Supprime l'artiste, ses morceaux et ses albums associés
const deleteArtiste = asyncHandler(async (req, res) => {
    const artiste = await ArtisteModel.findById(req.params.id);

    if (!artiste) {
        res.status(400);
        throw new Error('Artiste not found');
    }

    try {
        // Supprime l'artiste, ses morceaux et ses albums associés
        await ArtisteModel.findByIdAndDelete(req.params.id);
        await MorceauModel.deleteMany({ artiste: artiste.nom_artiste });
        await AlbumModel.deleteMany({ artiste: artiste.nom_artiste });

        res.json({ message: `Artiste '${artiste.nom_artiste}' deleted` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }

})

module.exports = {
    getArtistes,
    getArtiste,
    getArtisteSongs,
    addArtiste,
    updateArtiste,
    deleteArtiste
}
