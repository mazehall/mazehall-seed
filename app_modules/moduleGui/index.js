(function() {
  var path = require('path');
  var serveStatic = require('serve-static');

  module.exports = {
    usePreRouting: function(app) {
      console.log(process.env.NODE_ENV);
      var env = process.env.NODE_ENV || 'development';
      app.use(serveStatic(path.join(__dirname, env === 'development' ? 'public/src' : 'public/dist')));
    },

    useRouting: function(app) {
    }


  };

}).call(this);
