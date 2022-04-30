const express = require('express');
const router = express.Router();

const {getState} = require("../controllers/stateDataController");

router.route("/")
    .get((req, res) => {
        return res.json(getState(req.stateCode));
    });

router.route("/capital")
    .get((req, res) => {
        // find the state
        let returnVal = getState(req.stateCode);        

        // return filtered value
        return res.json({
            "state" : returnVal.state,
            "capital" : returnVal.capital_city    
        });
    });

router.route("/nickname")
    .get((req, res) => {
        // find the state
        let returnVal = getState(req.stateCode);        

        // return filtered value
        return res.json({
            "state" : returnVal.state,
            "nickname" : returnVal.nickname    
        });
    });

router.route("/population")
    .get((req, res) => {
        // find the state
        let returnVal = getState(req.stateCode);        

        // return filtered value
        return res.json({
            "state" : returnVal.state,
            "population" : returnVal.population   
        });
    });

router.route("/admission")
    .get((req, res) => {
        // find the state
        let returnVal = getState(req.stateCode);        

        // return filtered value
        return res.json({
            "state" : returnVal.state,
            "admitted" : returnVal.admission_date    
        });
    });


    
module.exports = router;