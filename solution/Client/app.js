/**
 * Express Application Configuration
 *
 * This file sets up and configures the Express.js application.
 * It initializes middleware, routing, view engine settings, Swagger documentation,
 * and error handling.
 */

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const swaggerUi = require('swagger-ui-express');
const openApiDocumentation = require('./swagger/swaggerDocumentation.json');
const fs = require("fs");
const swaggerFilePath = path.join(__dirname, "swagger", "swaggerDocumentation.json");
const swaggerDocument = JSON.parse(fs.readFileSync(swaggerFilePath, "utf8"));

const app = express();

/**
 * Import application routes
 * Each router handles a different feature of the application.
 */
const indexRouter = require('./routes/index');
const searchRouter = require('./routes/search');
const chatRouter = require('./routes/chat');
const latestRouter = require('./routes/latest');
const topRouter = require('./routes/top');
const oscarRouter = require('./routes/oscar');
const filmRouter = require('./routes/film');
const reviewRouter = require('./routes/review');

/**
 * Set up Swagger API documentation endpoint
 */
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openApiDocumentation));

/**
 * Configure Handlebars as the view engine
 * Handlebars templates are stored in the 'views' directory.
 */
const exphbs = require('express-handlebars');
app.engine('hbs', exphbs.engine({
  extname: 'hbs',
  defaultLayout: false,
  partialsDir: path.join(__dirname, 'views', 'partials')
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

/**
 * Middleware configuration
 * - Logger (Morgan) for request logging
 * - JSON and URL-encoded request body parsing
 * - Cookie parser for handling cookies
 * - Static file serving from the 'public' directory
 */
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Assign application routes
 * These routes handle different functionalities of the platform.
 */
app.use('/', indexRouter);
app.use('/search', searchRouter);
app.use('/chat', chatRouter);
app.use('/latest', latestRouter);
app.use('/top', topRouter);
app.use('/oscar', oscarRouter);
app.use('/film', filmRouter);
app.use('/film', reviewRouter);

/**
 * Catch 404 errors and forward to the error handler
 */
app.use(function (req, res, next) {
  next(createError(404));
});

/**
 * General error handler
 * - Displays error messages during development
 * - Sends generic error response in production mode
 */
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

/**
 * Export the configured Express application
 */
module.exports = app;