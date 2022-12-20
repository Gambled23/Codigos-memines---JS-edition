const express = require('express');
const router = express.Router();
const programmingLanguajes = require('../services/programmingLanguajes');

router.get('/', async function (req, res, next) {
    try {
        res.json(await programmingLanguajes.getMultiple(req.query.page));
    } catch (err) {
        console.error(`Error: ${err.message}`);
        next(err);
    }
});

module.exports = router;
