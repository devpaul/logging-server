var lib = require('./lib/index.js')
  , argv = getCommandLineArgs()

initLogger(argv.strategy)
startServer(argv.port)

function getCommandLineArgs() {
    var optimist = require('optimist')
    return optimist.usage('Start a logging server')
        .describe('port', "set the server's listening port")
        .describe('strategy', 'select the logging strategy (syslog, console)')
        .default('port', 2468)
        .alias('s', 'strategy')
        .argv
}

function initLogger(strat) {
    if(!strat)
        return;
    var strategy = lib.logging.strategies[strat]
    if(!strategy)
        throw new Error("unknown logging strategy")
    console.log('using ' + strat + ' logging strategy')
    lib.logging.logger.strategy = strategy
}

function startServer(port) {
    var app = lib.initExpress()
    app.listen(port)
    console.log('server started on ' + port)
}