const StateFact = require("../model/States");

const addFact = async (req, res) => {
    const factsInput = req?.body?.funfacts;
    if(!factsInput) return res.json({"message" : "State fun facts value required"});
  
    if(!Array.isArray(factsInput)) return res.json({"message": "State fun facts value must be an array"})

    let state = await StateFact.findOne({stateCode: req.stateCode}).exec();
    if(!state) state = await StateFact.create({"stateCode" : req.stateCode, "funfacts" : []});
    
    state.funfacts = state.funfacts.concat(factsInput);
    await state.save();
    
    return res.json(state);
}

const editFact = async (req, res) => {
    const index = req?.body?.index;
    if(!index || index == 0) return res.json({"message" : "State fun fact index value required"});
    
    const factInput = req?.body?.funfact;
    if(!factInput) return res.json({"message" : "State fun fact value required"});
    
    const state = await StateFact.findOne({stateCode: req.stateCode}).exec();
    if(!state) return res.json({"message" : "No Fun Facts found for " + req.stateName})

    if(index < 1 || index > state.funfacts.length) return res.json({"message" : "No Fun Fact found at that index for " + req.stateName})

    state.funfacts[index-1] = factInput;
    await state.save();  

    return res.json(state);
}

const deleteFact = async (req, res) => {
    const index = req?.body?.index;
    if(!index || index == 0) return res.json({"message" : "State fun fact index value required"});
  
    const state = await StateFact.findOne({stateCode: req.stateCode}).exec();
    if(!state) return res.json({"message" : "No Fun Facts found for " + req.stateName})

    if(index < 1 || index > state.funfacts.length) return res.json({"message" : "No Fun Fact found at that index for " + req.stateName})

    state.funfacts.splice(index-1, 1);
    await state.save();  

    return res.json(state);
}

const getFacts = async () => {
    return StateFact.find().exec();
}

const getFact = async (code) =>{
    return StateFact.findOne({stateCode : code}).exec()
}


module.exports = {
    addFact,
    editFact,
    deleteFact,
    getFacts,
    getFact
}