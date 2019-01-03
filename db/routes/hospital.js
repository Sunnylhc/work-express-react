var express = require('express');
var router = express.Router();

var hospitalController = require('../controllers/hospital');

router.get('/', hospitalController.gethospital);

router.get('/edit', hospitalController.getEdithospital);

 router.post('/add', hospitalController.hospitalAddPost);

router.post('/update', hospitalController.hospitalUpdatePost);

router.get('/delete', hospitalController.getDeletehospital);

module.exports = router;