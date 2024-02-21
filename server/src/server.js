const http = require('http');

const app = require('./app');[]

const { loadPlanetsData } = require('./models/planets.model');
const { connectDb } = require('./services/nosqldb');

const PORT = process.env.PORT || 8000;

const server = http.createServer(app)

async function startServer() {
    await connectDb()

    await loadPlanetsData();

    server.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`)
    })
}

startServer();