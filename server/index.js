const express = require('express');
require("dotenv").config();
const app = express()
const shipsRouter = require('./routes/ships'); // create this file next
const connectDB = require('./config/db');
const jwt = require("jsonwebtoken");

const port = process.env.PORT;

app.use(express.json());


// Generate once when server starts
const token = jwt.sign({ role: "admin" }, process.env.JWT_SECRET, { expiresIn: "1h" });
console.log("Test JWT Token:", token);


// Ship Route
// this will route to shipRoute ('./routes/ships') where all API endpoints is implemented
app.use("/ships", shipsRouter);


// function to connect MongoDB Database
connectDB();


app.get('/', (req, res) => {
    res.send('hello world')
  })

  app.listen(port, () => {
    console.log(`API running on http://localhost:${port}`)
  })