const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const path = require('path');

require('./databases/database'); // Connessione al database

const indexRouter = require('./routes/index');
const reviewsRouter = require('./routes/reviews');

const app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/reviews', reviewsRouter);

// Error handling
// Error handling
app.use((err, req, res, next) => {
  console.error('Errore:', err.message);
  if (res.headersSent) {
    return next(err);
  }
  res.status(err.status || 500);
  res.json({ message: err.message || 'Errore interno al server' });
});


module.exports = app;
