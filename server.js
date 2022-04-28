require("dotenv").config();

const express = require('express');
const app = express();

const path = require('path');
//const cors = ;
const mongoose = require('mongoose');

const connectDB = require('./config/dbConn');
connectDB();

const PORT = process.env.PORT || 3500;

// app.use(require('cors'));

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());


app.get("/", (req, res) => {
    console.log(path.join(__dirname, 'index.html'))
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.use("/states/", require("./controllers/statesController"));

app.all('*', (req, res) => {
    res.status(404);

    if(req.accepts("html")) return res.sendFile(path.join(__dirname, '404.html'));
    if(req.accepts('json')) return res.json({ "error": "404 Not Found" });
    
    res.sendFile(path.join(__dirname, '404.html'));    
});

mongoose.connection.once('open', () => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
