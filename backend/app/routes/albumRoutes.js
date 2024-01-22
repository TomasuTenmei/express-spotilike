const express = require('express')
const router = express.Router()

const {
    getAlbums,
    getAlbum,
    addAlbum,
    updateAlbum,
    deleteAlbum
} = require('../controllers/albumController')

// GET - /api/albums/:id/songs : Récupère les morceaux de l’album précisé par :id
// POST - /api/albums/:id/songs : Ajout d’un morceau dans l’album précisé par :id

router.get('/', getAlbums)
router.get('/:id', getAlbum)
router.post('/', addAlbum)
router.put('/:id', updateAlbum)
router.delete('/:id', deleteAlbum)

module.exports = router