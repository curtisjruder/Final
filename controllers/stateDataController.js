let data = {};
data.states = require("../model/states.json");
const {getFacts} = require("../controllers/factsController");


const configFacts = async () => { 
    let facts = await getFacts()

    data.states.map(itm => {
        delete itm.funfacts;
        const fact = facts.find(x => {return x.stateCode === itm.code});        
        if(!fact) return;
        itm.funfacts = fact.funfacts;
    })     
}

const getStates = async (req, res) => {
    await configFacts()

    let bX = req?.query?.contig;
    if(!bX) return res.json(data.states);  

    if(bX === "true")
        return res.json(data.states.filter(itm => {return itm.code !== "AK" && itm.code !== "HI"}))
    else
        return res.json(data.states.filter(itm => {return itm.code === "AK" || itm.code === "HI"}))

}   

const getState = async (req, res) => {
    await configFacts()
    let x = data.states.find(itm => {return itm.code === req.stateCode})
    return res.json(x);
}

const getCapital = (req, res) => {
    let x = data.states.find(itm => {return itm.code === req.stateCode})
    return res.json({
        "state" : x.state,
        "capital" : x.capital_city    
    });
}

const getNickName = (req, res) => {
    let x = data.states.find(itm => {return itm.code === req.stateCode})
    return res.json({
        "state" : x.state,
        "nickname" : x.nickname    
    });
}
const getPopulation = (req, res) => {
    let x = data.states.find(itm => {return itm.code === req.stateCode})
    return res.json({
        "state" : x.state,
        "population" : x.population     
    });
}

const getAdmission = (req, res) => {
    let x = data.states.find(itm => {return itm.code === req.stateCode})
    return res.json({
        "state" : x.state,
        "admitted" : x.admission_date      
    });
}

module.exports = {
    getState,
    getStates,
    getAdmission,
    getPopulation,
    getNickName,
    getCapital
}