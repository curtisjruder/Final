// Built in requirements
require("dotenv").config();
const express = require('express');
const app = express();
const cors = require("cors") ;
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3500;

// Custom built requirements
const verifyState = require('./middleware/verifyState');
const connectDB = require('./config/dbConn');
connectDB();

// Config using the built in requirement stuff
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Middleware
app.use("/states/:state", verifyState)

// Routing
app.use("/", require("./routes/root"));
app.use("/states/", require("./routes/statesRoute"));
app.use("/states/:state", require("./routes/stateRoute"));
app.use("/states/:state/funfact", require("./routes/funfactRoute"))
app.use('*', require("./routes/404Route"));

// Connection check
mongoose.connection.once('open', () => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
