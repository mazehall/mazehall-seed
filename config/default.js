module.exports = {
  logger: {
    format: "combined",
    options: {}
  },
  winston: {
    File: {
      level: 'silly',
      json: false,
      filename: './mazehall.log',
      handleExceptions: true,
      maxFiles: 3,
      maxsize: 1048576
    }
  }
};
