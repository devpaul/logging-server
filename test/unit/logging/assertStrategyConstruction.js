var loglevel = require('../../../lib/logging/logLevel.js')

module.exports = function assertStrategyConstruction(unit, test) {
    test.ok(unit[loglevel.ERROR])
    test.ok(unit[loglevel.DEBUG])
    test.ok(unit[loglevel.WARN])
    test.ok(unit[loglevel.LOG])
    test.ok(unit[loglevel.INFO])
}