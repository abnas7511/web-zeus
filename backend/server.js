require('dotenv').config();
const app = require("./src/app");
const http = require('http');
const connectDB = require('./src/config/db');

const PORT = process.env.PORT;
const server = http.createServer(app);

const startServer = async() => {
    await connectDB();
    server.listen(PORT, () => {
        console.log(`Server started on Port: ${PORT}`);
    })
}

startServer();