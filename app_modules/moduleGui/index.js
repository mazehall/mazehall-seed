var path = require('path');
var serveStatic = require('serve-static');

module.exports = function(app) {
    var env = process.env.NODE_ENV || 'development';
    app.use(serveStatic(path.join(__dirname, env === 'development' ? 'public/src' : 'public/dist')));
}
