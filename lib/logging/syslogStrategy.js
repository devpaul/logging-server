var syslog = require('node-syslog')
  , level = require('./logLevel.js')

exports[level.ERROR] = log
exports[level.DEBUG] = log
exports[level.WARN] = log
exports[level.LOG] = log
exports[level.INFO] = log

function log(msg, program, level) {
    program = program || "node-logging"
    syslog.init(program)
    syslog.log(level, msg)
}