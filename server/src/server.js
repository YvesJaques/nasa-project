const http = require('http');
const mongoose = require('mongoose');
require('dotenv').config();

const app = require('./app');[]

const { loadPlanetsData } = require('./models/planets.model')

const PORT = process.env.PORT || 8000;

const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/nasa-api';

const server = http.createServer(app)

mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready!')
})

mongoose.connection.on('error', (err) => {
    console.error(err);
})

async function startServer() {
    await mongoose.connect(MONGO_URL)

    await loadPlanetsData();

    server.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`)
        console.log(`MONGO=`,MONGO_URL)
    })
}

startServer();