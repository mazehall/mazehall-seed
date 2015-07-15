module.exports = {
  logger: {
    format: "combined",
    options: {}
  },
  winston: {
    Console: {
      level: 'info',
      timestamp: true,
      handleExceptions: true,
      colorize:true
    }
  }
};
