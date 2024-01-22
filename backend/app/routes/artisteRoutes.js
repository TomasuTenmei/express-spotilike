const express = require('express')
const router = express.Router()

const {
    getArtistes,
    getArtiste,
    addArtiste,
    updateArtiste,
    deleteArtiste
} = require('../controllers/artisteController')

// GET - /api/artists/:id/songs : Récupère la liste de tous les morceaux de l’artiste précisé par :id

router.get('/', getArtistes)
router.get('/:id', getArtiste)
router.post('/', addArtiste)
router.put('/:id', updateArtiste)
router.delete('/:id', deleteArtiste)

module.exports = router