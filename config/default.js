module.exports = {
  logger: {
    format: "combined",
    options: {}
  },
  winston: {
    File: {
      level: 'silly',
      json: false,
      filename: './var/pronto.log',
      handleExceptions: true,
      maxFiles: 3,
      maxsize: 5242880
    }
  }
};
