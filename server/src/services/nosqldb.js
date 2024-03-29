const mongoose = require('mongoose')

require('dotenv').config();

const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/nasa-api';

mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready!')
})

mongoose.connection.on('error', (err) => {
    console.error(err);
})

async function connectDb() {
    await mongoose.connect(MONGO_URL)
}

async function disconnectDb() {
    await mongoose.disconnect(MONGO_URL)
}

module.exports = {
    connectDb,
    disconnectDb
}