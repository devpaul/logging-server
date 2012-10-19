var level = require('./logLevel.js');

exports[level.ERROR] = logError
exports[level.DEBUG] = logInfo
exports[level.WARN] = logInfo
exports[level.LOG] = logInfo
exports[level.INFO] = logInfo

function logError(msg, program) {
    parse(msg, program, console.error)
}

function logInfo(msg, program) {
    parse(msg, program, console.log)
}

function parse(msg, program, callback) {
    if(program)
        callback("[%s] %s", program, msg)
    else
        callback(msg)
}

