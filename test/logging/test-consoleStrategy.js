var unit = requireUnit(__filename)
  , assertStrategyConstruction = require('./assertStrategyConstruction.js')
  , loglevel = require('../../lib/logging/logLevel.js')
  , testutil = require('testutil')

exports['is constructed properly'] = function(test) {
    assertStrategyConstruction(unit, test)
    test.done()
}

var LOG_FUNCS = [ [unit[loglevel.DEBUG]]
                , [unit[loglevel.WARN]]
                , [unit[loglevel.LOG]]
                , [unit[loglevel.INFO]]
                ]

exports['normal logging'] = testutil.parameterize(LOG_FUNCS, assertInfoLogging)

exports['error logging'] = function(test) {
    var oldConsole = console.error
      , mock = testutil.MockFunction()
      , logger = unit[loglevel.ERROR]
    console.error = mock
    assertLogging(test, logger, mock)
    console.error = oldConsole
    test.done()
}

function assertInfoLogging(test, logger) {
    var oldConsole = console.log
    var mock = testutil.MockFunction()
    console.log = mock
    assertLogging(test, logger, mock)
    console.log = oldConsole
    test.done()
}

function assertLogging(test, logger, mock) {
    logger("msg", "program", "level")
    test.ok(mock.argList)
    test.equal(1, mock.argList.length)
}