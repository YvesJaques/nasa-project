const http = require('http');
require('dotenv').config();

const app = require('./app');[]

const { loadPlanetsData } = require('./models/planets.model')

const PORT = process.env.PORT || 8000;

const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/nasa-api';

const server = http.createServer(app)

async function startServer() {
    await loadPlanetsData();

    server.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`)
        console.log(`MONGO=`,MONGO_URL)
    })
}

startServer();