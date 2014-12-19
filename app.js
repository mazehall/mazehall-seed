var mazehall = require('mazehall');
var config = require('config');
var expressValidator = require('express-validator');
var logger = require('morgan');
var winston = require('winston');

var key;
winston.remove(winston.transports.Console);
for (key in config.winston) {
  winston.add(winston.transports[key], config.winston[key]);
}

mazehall.app.use(expressValidator());
mazehall.app.use(logger(config.logger.format, config.logger.options));

module.exports = mazehall;
