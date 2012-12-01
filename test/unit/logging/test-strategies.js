var unit = requireUnit(__filename)

exports['is constructed properly'] = function(test) {
    test.ok(unit.syslog)
    test.ok(unit.console)
    test.ok(unit.default)
    test.equal(unit.syslog, unit.default)
    test.done()
}