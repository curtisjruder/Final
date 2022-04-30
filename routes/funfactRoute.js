const express = require('express');
const router = express.Router();
const {getState} = require("../controllers/stateDataController");
const {addFact, editFact, deleteFact} = require("../controllers/factsController");

router.route("/")
    .get((req,res) => {
        // find the state
        let returnVal = getState(req.stateCode);   

        if(!returnVal.funfacts || returnVal.funfacts.length === 0) return res.json({"message" : "No Fun Facts found for " + returnVal.state})

        let i = Math.floor(Math.random() * returnVal.funfacts.length);
        return res.json({
            "funfact" : returnVal.funfacts[i]
        })
    })
    .post(addFact)
    .patch(editFact)
    .delete(deleteFact)

module.exports = router;