const StateFact = require("../model/States");

const addFacts = async (req, res) => {
    const stateInput = req?.body?.stateInput;
    const factsInput = req?.body?.factsInput;

    if(!stateInput || !factsInput || factsInput.length === 0) return res.status(400).json({"error" : "404 Not Found"});

    const state = await StateFact.findOne({stateCode: stateInput}).exec();
    if(!state) state = await StateFact.create({"stateCode" : stateCode, "funfacts" : []});
    
    state.funfacts = state.funfacts.concat(factsInput);
    const result = await state.save();

    return res.status(201).json({'success' : 'New facts created for ' + stateCode});
}

const getFact = async (req, res) => {
    if(!req?.params?.id) return res.status(400).json({"error" : "404 Not Found"});

    const facts = await StateFact.findOne({_id: req.params.id}).exec();
    if(!facts) return res.status(400).json({"error" : "ID " + req.params.id + " Not Found"});
    
    res.json(facts);
}

module.exports = {
    addFacts,
    getFact
}