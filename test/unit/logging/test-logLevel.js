var testutil = require('testutil')
  , unit = requireUnit(__filename)

exports['is constructed properly'] = function(test) {
    test.ok(unit.ERROR)
    test.ok(unit.WARN)
    test.ok(unit.INFO)
    test.ok(unit.LOG)
    test.ok(unit.DEBUG)
    test.done()
}