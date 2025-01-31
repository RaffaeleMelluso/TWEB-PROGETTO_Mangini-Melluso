#!/usr/bin/env node

/**
 * Module dependencies.
 * The socket.io integration is derived from
 * Week 3.d1 Socket.io chat - Starting point for Solution/app.js
 */

var app = require('../app');
var debug = require('debug')('Client:server');
var http = require('http');

/**
 * Retrieve the port from environment variables or default to 3000.
 * Store the retrieved port in the Express application.
 */

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create an HTTP server instance using the Express application.
 */

var server = http.createServer(app);

/**
 * Start listening on the specified port and bind to all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a valid format (number, string, or false).
 * This function ensures compatibility with named pipes and standard ports.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // If not a number, return the original value (e.g., named pipe)
    return val;
  }

  if (port >= 0) {
    // Valid port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 * Handles specific listen errors and provides meaningful error messages.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;

  // Handle common listen errors with user-friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 * Logs the address and port to which the server is bound.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

/**
 * Integrating socket.io for real-time communication.
 *
 * The pingTimeout has been increased to 60000ms as per
 * the recommendation in https://github.com/socketio/socket.io/issues/3259
 * The default of 5000ms caused frequent disconnections.
 */
const io = require('socket.io')(server, {
  pingTimeout: 60000,
});

// Importing the socket.io module and initializing it with the server and app
let socket_module  = require('../public/socket_io/socket_io.js');
socket_module.init(io, app);