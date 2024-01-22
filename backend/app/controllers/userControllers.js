const asyncHandler = require('express-async-handler')
const UserModel = require('../models/userModel')

const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'User registered' })
})

const loginUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'User logged' })
})

const getMe = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'User data' })
})

module.exports = {
    registerUser,
    loginUser,
    getMe
}
