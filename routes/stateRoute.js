const express = require('express');
const router = express.Router();

const stateController = require("../controllers/stateDataController");

router.route("/")
    .get(stateController.getState);

router.route("/capital")
    .get(stateController.getCapital);

router.route("/nickname")
    .get(stateController.getNickName);

router.route("/population")
    .get(stateController.getPopulation);

router.route("/admission")
    .get(stateController.getAdmission);


    
module.exports = router;