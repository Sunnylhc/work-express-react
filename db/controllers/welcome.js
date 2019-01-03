const moment = require('moment');

const welcome = require('../models/welcome');


/* READ *****************************/

// exports.getwelcome = (req, res, next) => {
//     welcome.fetchAll()
//         .then(([rows]) => {
//             // for (let p of rows) {
//             //     p.date = moment(p.date).format('MMM D, YYYY');
//             // }
//             // console.log(JSON.stringify(rows, ["id", "title", "date"]));
//             //res.send(JSON.stringify(rows));
//             res.render('welcome', {
//                 data: rows,
//                 title: 'Post List',
//             });
//         })
//         .catch(err => console.log(err));
// };
// welcome.get('/article', function(req, res) {
// 	res.render('article');
// });