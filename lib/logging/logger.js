var strategies = require('./strategies.js')
  , logLevel = require('./logLevel.js')
  , logger

logger = module.exports = function logger(level, msg, program) {
    var func = logger.strategy[level.toUpperCase()]
             || logger.strategy[logLevel.LOG]

    func(msg, program, level)
}

logger.strategy = strategies.default
