const express = require("express");
const cors = require("cors");
const formRoute = require("./api/routes/formRoutes"); 
const { errorHandler } = require("./api/middlewares/error");

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}));

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/forms", formRoute);

app.get('/', (req, res) => {
    res.send("Backend server is running...");
});


app.use(errorHandler);
module.exports = app;