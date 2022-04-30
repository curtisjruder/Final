const express = require('express');
const router = express.Router();
const {getStates} = require("../controllers/stateDataController");

// includes the ?contig routes
router.route("/")
    .get((req, res, next) => {
        let bX = req?.query?.contig;
        let data = {}
        data.states = getStates();

        if(!bX) return res.json(data.states);
        
        let returnVal;
        if(bX === "true"){        
            returnVal = data.states.filter(itm => {return itm.code !== "AK" && itm.code !== "HI"})
        } else if(bX === "false"){           
            returnVal = data.states.filter(itm => {return itm.code === "AK" || itm.code === "HI"})
        } else{
            return next(); // invalid entry to contig should fail here!
        }

        return res.json(returnVal);
    });



module.exports = router;



