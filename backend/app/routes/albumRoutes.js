const express = require('express')
const router = express.Router()

const {
    getAlbums,
    getAlbum,
    getAlbumSongs,
    addAlbum,
    addAlbumSong,
    updateAlbum,
    deleteAlbum
} = require('../controllers/albumController')

router.get('/', getAlbums)
router.get('/:id', getAlbum)
router.get('/:id/songs', getAlbumSongs)
router.post('/', addAlbum)
router.post('/:id/songs', addAlbumSong)
router.put('/:id', updateAlbum)
router.delete('/:id', deleteAlbum)

module.exports = router