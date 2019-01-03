const Pet = require('../models/pet');
exports.getwelcome = (req, res, next) => {
    Pet.getpet()
        .then(([rows]) => {
            // for (let p of rows) {
            //     p.date = moment(p.date).format('MMM D, YYYY');
            // }
            // console.log(JSON.stringify(rows, ["id", "title", "date"]));
            //res.send(JSON.stringify(rows));
            res.render('pet', {
                data: rows,
                title: 'Pet List',
            });
        })
        .catch(err => console.log(err));
};

exports.petAddPost = (req, res, next) => {

    Pet.add(req, res)
        .then(([rows]) => {
            res.redirect('/pet');
        })
        .catch(err => console.log(err));
};


exports.getEditpet = async (req, res, next) => {

    let categories;
    let post;

    const getCategories = await Pet.getpet()
        .then(([rows]) => {
            categories = rows;
            //console.log('findCategories(): ', JSON.stringify(rows));
        })

    const findPostById = await Pet.findById(req.query.id)
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
    
    res.render('detailpet', {
        data: post,
        title: 'Edit pet',
        categories: categories
   });

};


exports.hospitalUpdatePost = (req, res, next) => {

    Pet.updateById(req, res)
        .then(([rows]) => {
            res.redirect('/post');
        })
        .catch(err => console.log(err));
};

exports.getDeletehospital = (req, res, next) => {
    Pet.deleteById(req.query.id)
        .then(([rows]) => {
            res.redirect('/post');
        })
        .catch();
};
