module.exports = {
  logger: {
    format: "dev",
    options: {
      format: 'dev',
      skip: function (req, res) {
        return res.statusCode === 304;
      }
    }
  },
  winston: {
    Console: {
      level: 'silly',
      timestamp: true,
      handleExceptions: true,
      colorize:true
    }
  }
};
