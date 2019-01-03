const getmedical = require('../models/medical');
exports.getmedical = (req, res, next) => {
    getmedical.getmedical()
        .then(([rows]) => {
            // for (let p of rows) {
            //     p.date = moment(p.date).format('MMM D, YYYY');
            // }
            // console.log(JSON.stringify(rows, ["id", "title", "date"]));
            //res.send(JSON.stringify(rows));
            res.render('medical', {
                data: rows,
                title: 'medical List',
            });
        })
        .catch(err => console.log(err));
};
// welcome.get('/article', function(req, res) {
// 	res.render('article');
// });