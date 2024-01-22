const express = require('express')
const router = express.Router()

const {
    getGenres,
    getGenre,
    addGenre,
    updateGenre,
    deleteGenre
} = require('../controllers/genreController')

router.get('/', getGenres)
router.get('/:id', getGenre)
router.post('/', addGenre)
router.put('/:id', updateGenre)
router.delete('/:id', deleteGenre)

module.exports = router