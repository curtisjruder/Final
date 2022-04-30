const express = require('express');
const router = express.Router();
const {getStates} = require("../controllers/stateDataController");

// includes the ?contig routes
router.route("/")
    .get(getStates);



module.exports = router;



