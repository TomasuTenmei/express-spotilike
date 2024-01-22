const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const cn = await mongoose.connect(process.env.MONGO_URI)
        console.log("Connecté à MongoDB".cyan);
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB