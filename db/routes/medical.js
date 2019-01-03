var express = require('express');
var router = express.Router();

var medicalController = require('../controllers/medical');

router.get('/', medicalController.getmedical);

// router.get('/edit', postController.getEditPost);

// router.post('/add', postController.postAddPost);

// router.post('/update', postController.postUpdatePost);

// router.get('/delete', postController.getDeletePost);

module.exports = router;