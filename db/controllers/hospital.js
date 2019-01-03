const hospital = require('../models/hospital');
const moment = require('moment');
exports.gethospital = (req, res, next) => {
    hospital.gethospital()
        .then(([rows]) => {
            for (let p of rows) {
                p.date = moment(p.date).format('MMM D, YYYY');
            }
            // console.log(JSON.stringify(rows, ["id", "title", "date"]));
            //res.send(JSON.stringify(rows));
            res.render('hospital', {
                data: rows,
                title: 'hospital List',
            });
        })
        .catch(err => console.log(err));
};

exports.hospitalAddPost = (req, res, next) => {

    hospital.add(req, res)
        .then(([rows]) => {
            res.redirect('/hospital');
        })
        .catch(err => console.log(err));
};


exports.getEdithospital = async (req, res, next) => {

    let categories;
    let post;

    const getCategories = await hospital.gethospital()
        .then(([rows]) => {
            categories = rows;
            //console.log('findCategories(): ', JSON.stringify(rows));
        })

    const findPostById = await hospital.findById(req.query.doctor)
        .then(([rows]) => {
            // for (let p of rows) {
            //     p.date = moment(p.date).format('YYYY-MM-DD');
            //     console.log('p.date: ', p.date);
            // }
            post = rows;
            //console.log('post[0].date: ', post[0].date);
           //console.log('findPostById(): ', JSON.stringify(rows));
        })
        .catch(err => console.log(err));

    // console.log('post: ', JSON.stringify(post[0].date));
    
    res.render('detailhospital', {
        data: post,
        title: 'Edit hospital',
        categories: categories
   });

};


exports.hospitalUpdatePost = (req, res, next) => {

    hospital.updateById(req, res)
        .then(([rows]) => {
            res.redirect('/hospital');
        })
        .catch(err => console.log(err));
};

exports.getDeletehospital = (req, res, next) => {
    hospital.deleteById(req.query.doctor)
        .then(([rows]) => {
            res.redirect('/hospital');
        })
        .catch();
};