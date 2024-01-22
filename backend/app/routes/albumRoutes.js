const express = require('express')
const router = express.Router()

const {
    getAlbums,
    getAlbum,
    getAlbumSongs,
    addAlbum,
    updateAlbum,
    deleteAlbum
} = require('../controllers/albumController')

// POST - /api/albums/:id/songs : Ajout d’un morceau dans l’album précisé par :id

router.get('/', getAlbums)
router.get('/:id', getAlbum)
router.get('/:id/songs', getAlbumSongs)
router.post('/', addAlbum)
router.put('/:id', updateAlbum)
router.delete('/:id', deleteAlbum)

module.exports = router