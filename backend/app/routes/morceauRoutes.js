const express = require('express')
const router = express.Router()

const {
    getMorceaux,
    getMorceau,
    addMorceau,
    updateMorceau,
    deleteMorceau
} = require('../controllers/morceauController')

router.get('/', getMorceaux)
router.get('/:id', getMorceau)
router.post('/', addMorceau)
router.put('/:id', updateMorceau)
router.delete('/:id', deleteMorceau)

module.exports = router