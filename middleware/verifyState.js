
const data = {};
data.states = require("../model/states.json");

const verifyState = (req, res, next) => {
    // Check for the state
    let code = req?.params?.state    
    if(!code) return next(); // Exit if it isn't provided
    
    code = code.toUpperCase();
    // Grab the specific state of interest
    state = data.states.find(itm => { return itm.code === code});

    // If it doesn't exist, FAIL and return
    if(!state) return res.json({"message" : "Invalid state abbreviation parameter"});

    // Set the value and continue along
    req.stateCode = code;
    req.stateName = state.state;
    next();
}

module.exports = verifyState