require('dotenv').config();
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//passport config
const session = require("express-session");
const passport = require("passport");
require("./helpers/passport");

var index = require('./routes/index');
var users = require('./routes/users');
const auth =  require('./routes/auth');
const tickets = require('./routes/tickets')

var app = express();
const corsOptions= {
  origin:true,
  credentials:true
}
app.use(require("cors")(corsOptions));

require("mongoose").connect(process.env.mongoURL).then(console.log(`Conected to ${process.env.mongoURL}`));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//passport 
app.use(session({
  secret: 'final project',
  resave: true,
  saveUninitialized: true,
  cookie : { httpOnly: true, maxAge: 2419200000 }
}));

app.use(passport.initialize());
app.use(passport.session());

//uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index)
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/tickets', tickets);

app.all('/*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
