var mazehall = require('mazehall');
var config = require('config');
var logger = require('morgan');
var express = require('express');

var app = express()
app.use(logger(config.logger.format, config.logger.options));
mazehall.initExpress(app);
mazehall.moduleStream.log();

module.exports = app;
