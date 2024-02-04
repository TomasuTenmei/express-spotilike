const express = require('express')
const router = express.Router()

const {
    getArtistes,
    getArtiste,
    getArtisteSongs,
    addArtiste,
    updateArtiste,
    deleteArtiste
} = require('../controllers/artisteController')

router.get('/', getArtistes)
router.get('/:id', getArtiste)
router.get('/:id/songs', getArtisteSongs)
router.post('/', addArtiste)
router.put('/:id', updateArtiste)
router.delete('/:id', deleteArtiste)

module.exports = router