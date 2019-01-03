var express = require('express');
var router = express.Router();

const Pet = require('../controllers/pet');

router.get('/', Pet.getwelcome);

module.exports = router;