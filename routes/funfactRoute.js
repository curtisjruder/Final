const express = require('express');
const router = express.Router();
const {getState} = require("../controllers/stateDataController");
const {addFact, editFact, deleteFact} = require("../controllers/factsController");

router.route("/")
    .get(getState)
    .post(addFact)
    .patch(editFact)
    .delete(deleteFact)

module.exports = router;