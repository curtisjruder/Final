const data = {};
data.states = require("../model/states.json");
const {getFacts} = require("../controllers/factsController");

const configFacts = async () => { 
    const facts = await getFacts(); 

    data.states.map(itm => {
        const fact = facts.find(x => {return x.stateCode === itm.code});
        if(!fact) return;
        itm.funfacts = fact.funfacts;
    }) 
}

configFacts();

const getState = (code) => {
    return data.states.find(itm => {return itm.code === code})
}

const getStates = () => {
    return data.states;
}

module.exports = {
    getState,
    getStates
}