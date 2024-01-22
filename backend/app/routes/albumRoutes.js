const express = require('express')
const router = express.Router()

const {
    getAlbums,
    getAlbum,
    addAlbum,
    updateAlbum,
    deleteAlbum
} = require('../controllers/albumController')

router.get('/', getAlbums)
router.get('/:id', getAlbum)
router.post('/', addAlbum)
router.put('/:id', updateAlbum)
router.delete('/:id', deleteAlbum)

module.exports = router