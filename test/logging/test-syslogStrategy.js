var unit = requireUnit(__filename)
  , assertStrategyConstruction = require('./assertStrategyConstruction.js')

exports['is correctly constructed'] = function(test) {
    assertStrategyConstruction(unit, test)
    test.done()
}

// TODO add a test that mocks out syslog and verifies calls