const express = require('express')
const router = express.Router()

const {
    registerUser,
    loginUser,
    getMe,
    deleteUser
} = require('../controllers/userController')

const { protect } = require('../middlewares/authMiddleware')

// DELETE - /api/users/:id : Suppression de utilisateur précisé par :id

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)
router.delete('/:id', deleteUser)

module.exports = router
