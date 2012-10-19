exports.initExpress = require('./server/initExpressCmd.js')
exports.logging = { logger : require('./logging/logger.js')
                  , strategies : require('./logging/strategies.js')
                  }