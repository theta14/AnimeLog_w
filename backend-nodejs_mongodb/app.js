var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const api = '/api';
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/database');

// mongoose.Promise = require('bluebird');
mongoose.Promise = global.Promise;
mongoose.connect(config.database, { useNewUrlParser: true, useFindAndModify: false });
mongoose.connection.on('connected', () => console.log('Connected to database ' + config.database));
mongoose.connection.on('error', (err) => console.log('Database error ' + err));

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

routing([
  'tvas',
  'movies',
  'watchings',
  'plans',
  'searches',
  'test'
]);

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

function routing(arr) {
  for (let s of arr) app.use(`${api}/${s}/`, require(`./routes/${s}`));
}

module.exports = app;
