const express = require('express');
const router = express.Router();
const path = require('path');
const data = {};

data.states = require("../model/states.json");


function getState(req){
    let code = req?.params?.state        
    if(!code) return;
    return data.states.find(itm => { return itm.code === code});
}

// includes the ?contig routes
router.route("/")
    .get((req, res, next) => {
        let bX = req?.query?.contig;

        if(!bX) return res.json(data.states);
        
        let returnVal;
        if(bX === "true"){        
            returnVal = data.states.filter(itm => {return itm.code !== "AK" && itm.code !== "HI"})
        } else if(bX === "false"){           
            returnVal = data.states.filter(itm => {return itm.code === "AK" || itm.code === "HI"})
        } else{
            return next();
        }

        return res.json(returnVal);
    });

router.route("/:state")
    .get((req, res, next) => {
        // find the state
        let returnVal = getState(req);        
        if(!returnVal) return next(); 

        // return filtered value
        return res.json(returnVal);
    });

router.route("/:state/capital")
    .get((req, res, next) => {
        // find the state
        let returnVal = getState(req);        
        if(!returnVal) return next(); 

        // return filtered value
        return res.json({
            "state" : returnVal.state,
            "capital" : returnVal.capital_city    
        });
    });

router.route("/:state/nickname")
    .get((req, res, next) => {
        // find the state
        let returnVal = getState(req);        
        if(!returnVal) return next(); 

        // return filtered value
        return res.json({
            "state" : returnVal.state,
            "nickname" : returnVal.nickname    
        });
    });

router.route("/:state/population")
    .get((req, res, next) => {
        // find the state
        let returnVal = getState(req);        
        if(!returnVal) return next(); 

        // return filtered value
        return res.json({
            "state" : returnVal.state,
            "population" : returnVal.population   
        });
    });

router.route("/:state/admission")
    .get((req, res, next) => {
        // find the state
        let returnVal = getState(req);        
        if(!returnVal) return next(); 

        // return filtered value
        return res.json({
            "state" : returnVal.state,
            "admitted" : returnVal.admission_date    
        });
    });

module.exports = router;



