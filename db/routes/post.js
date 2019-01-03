var express = require('express');
var router = express.Router();

const postController = require('../controllers/post');

router.get('/', postController.getPosts);

router.get('/edit', postController.getEditPost);

router.post('/add', postController.postAddPost);

router.post('/update', postController.postUpdatePost);

router.get('/delete', postController.getDeletePost);

module.exports = router;