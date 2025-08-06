const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}));
app.get('/', (req, res) => {
    res.send("Backend server is running...");
})

module.exports = app;