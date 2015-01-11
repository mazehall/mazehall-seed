var winston = require('winston');
var config = require('config');
winston.profile('server start');
var server = require('./app.js');

var key;
winston.remove(winston.transports.Console);
for (key in config.winston) {
  winston.add(winston.transports[key], config.winston[key]);
}

var port = process.env.PORT || 3000;

server.listen(port, function() {
  console.log('server listening on port ' + port)
  winston.profile('server start');
});
