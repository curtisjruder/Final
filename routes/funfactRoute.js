const express = require('express');
const router = express.Router();
const {getFunFact} = require("../controllers/stateDataController");
const {addFact, editFact, deleteFact} = require("../controllers/factsController");

router.route("/")
    .get(getFunFact)
    .post(addFact)
    .patch(editFact)
    .delete(deleteFact)

module.exports = router;