const health = require('../models/health');
exports.gethealth = (req, res, next) => {
    health.gethealth()
        .then(([rows]) => {
            // for (let p of rows) {
            //     p.date = moment(p.date).format('MMM D, YYYY');
            // }
            // console.log(JSON.stringify(rows, ["id", "title", "date"]));
            //res.send(JSON.stringify(rows));
            res.render('health', {
                data: rows,
                title: 'health List',
            });
        })
        .catch(err => console.log(err));
};
// welcome.get('/article', function(req, res) {
// 	res.render('article');
// });