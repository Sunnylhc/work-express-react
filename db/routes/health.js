var express = require('express');
var router = express.Router();

var healthController = require('../controllers/health');

router.get('/', healthController.gethealth);

// router.get('/edit', postController.getEditPost);

// router.post('/add', postController.postAddPost);

// router.post('/update', postController.postUpdatePost);

// router.get('/delete', postController.getDeletePost);

module.exports = router;