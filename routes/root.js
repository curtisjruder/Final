const express = require('express');
const router = express.Router();
const path = require('path');

// includes the ?contig routes
router.route("/")
    .get((req, res) => {
        return res.sendFile(path.join(__dirname, "..", "view", 'index.html'));
    });


module.exports = router;