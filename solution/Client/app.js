const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

/** Import delle rotte */
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const searchRouter = require('./routes/search');
const chatRouter = require('./routes/chat');
const latestRouter = require('./routes/latest');
const topRouter = require('./routes/top');
const oscarRouter = require('./routes/oscar');
const filmRouter = require('./routes/film'); // Importa la rotta dei film


// Configura Handlebars
const exphbs = require('express-handlebars');
app.engine('hbs', exphbs.engine({
  extname: 'hbs',
  defaultLayout: false,
  partialsDir: path.join(__dirname, 'views', 'partials')
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/** Assegnazione delle rotte */
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/search', searchRouter);
app.use('/chat', chatRouter);
app.use('/latest', latestRouter);
app.use('/top', topRouter);
app.use('/oscar', oscarRouter);
app.use('/film', filmRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;