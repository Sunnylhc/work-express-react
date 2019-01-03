var express = require('express');
var router = express.Router();

var feedController = require('../controllers/feed');

router.get('/', feedController.getPosts);

// router.get('/edit', postController.getEditPost);

// router.post('/add', postController.postAddPost);

// router.post('/update', postController.postUpdatePost);

// router.get('/delete', postController.getDeletePost);

module.exports = router;