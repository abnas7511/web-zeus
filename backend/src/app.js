const express = require("express");
const cors = require("cors");
const formRoute = require("./api/routes/formRoutes"); 
const { errorHandler } = require("./api/middlewares/error");

const app = express();
const allowedOrigins = process.env.CORS_ORIGIN.split(',');

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('This origin is not allowed by CORS'));
    }
  },
  credentials: true, 
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/forms", formRoute);

app.get('/', (req, res) => {
    res.send("Backend server is running...");
});


app.use(errorHandler);
module.exports = app;