var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    //res.send('respond with a resource');
    res.json([{
        id: 1,
        username: "林浩晴"
    }, {
        id: 2,
        username: "陳弘憲"
    }, {
        id: 3,
        username: "張耀明"
    }]);
});

module.exports = router;