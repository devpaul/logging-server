var unit = requireUnit(__filename)
  , loglevel = requireSrc('logging/logLevel.js')
  , testutil = require('testutil')

exports['is correctly constructed'] = function(test) {
    test.ok(unit)
    test.ok(unit.strategy)
    test.done()
}

var usesStrategy = exports['logger functional test'] = {
    setUp : function(callback) {
        usesStrategy.oldStrategy = unit.strategy
        unit.strategy = createMockStrategy()
        callback()
    },

    "uses strategy to log" : function(test) {
        var mock = unit.strategy
          , key
        for (key in mock)
            if (mock.hasOwnProperty(key))
                assertLogLevelUsesMock(test, mock[key], key)
        test.done()
    },

    tearDown : function(callback) {
        unit.strategy = usesStrategy.oldStrategy
        callback()
    }
}

function assertLogLevelUsesMock(test, mock, level) {
    unit(level, "msg", "program")
    test.ok(mock.argList)
    test.equal(1, mock.argList.length)
}

function createMockStrategy() {
    var mock = {}
    mock[loglevel.ERROR] = testutil.MockFunction()
    mock[loglevel.DEBUG] = testutil.MockFunction()
    mock[loglevel.WARN] = testutil.MockFunction()
    mock[loglevel.LOG] = testutil.MockFunction()
    mock[loglevel.INFO] = testutil.MockFunction()
    return mock
}