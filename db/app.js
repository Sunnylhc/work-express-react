var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var dashboardRouter = require('./routes/dashboard');
var usersRouter = require('./routes/users');
var accRouter = require('./routes/account');
//const accRouter = require('./routes/account');
const postRouter = require('./routes/post');
var welcome = require('./routes/welcome');
var feedRouter = require('./routes/feed');
const petRouter = require('./routes/pet');
var medcialRouter = require('./routes/medical');
var healthRouter = require('./routes/health');

var hospitalRouter = require('./routes/hospital');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use( express.static( "public" ) );
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/',welcome);
app.use('/d', dashboardRouter);
app.use('/post', postRouter);
app.use('/users', usersRouter);
app.use('/404416066',accRouter);
app.use('/pet',petRouter);
app.use('/feed',feedRouter);
app.use('/medcial',medcialRouter);
app.use('/health',healthRouter);
app.use('/hospital',hospitalRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;