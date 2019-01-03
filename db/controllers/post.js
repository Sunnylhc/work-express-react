const moment = require('moment');

const Post = require('../models/post');


/* READ *****************************/

exports.getPosts = (req, res, next) => {
    Post.getpet()
        .then(([rows]) => {
            for (let p of rows) {
                p.date = moment(p.date).format('MMM D, YYYY');
            }
            for (let a of rows) {
                a.birthday = moment(a.birthday).format('MMM D, YYYY');
            }
            console.log(JSON.stringify(rows, ["id", "title", "date"]));
            //res.send(JSON.stringify(rows));
            res.render('posts', {
                data: rows,
                title: 'Post List',
            });
        })
        .catch(err => console.log(err));
};

exports.getEditPost = async (req, res, next) => {

    let categories;
    let post;

    const getCategories = await Post.getpet()
        .then(([rows]) => {
            categories = rows;
            //console.log('findCategories(): ', JSON.stringify(rows));
        })

    const findPostById = await Post.findById(req.query.id)
        .then(([rows]) => {
            for (let p of rows) {
                p.date = moment(p.date).format('YYYY-MM-DD');
                console.log('p.date: ', p.date);
            }
            post = rows;
            //console.log('post[0].date: ', post[0].date);
           //console.log('findPostById(): ', JSON.stringify(rows));
        })
        .catch(err => console.log(err));

    console.log('post: ', JSON.stringify(post[0].date));
    
    res.render('detailpet', {
        data: post,
        title: 'Edit Post',
        categories: categories
   });

};

exports.postAddPost = (req, res, next) => {

    Post.add(req, res)
        .then(([rows]) => {
            res.redirect('/');
        })
        .catch(err => console.log(err));
};



exports.postUpdatePost = (req, res, next) => {

    Post.updateById(req, res)
        .then(([rows]) => {
            res.redirect('/');
        })
        .catch(err => console.log(err));
};

exports.getDeletePost = (req, res, next) => {
    Post.deleteById(req.query.id)
        .then(([rows]) => {
            res.redirect('/post');
        })
        .catch();
};