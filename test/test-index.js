var unit = requireUnit(__filename)

exports['is constructed properly'] = function(test) {
    test.ok(unit.initExpress)
    test.ok(unit.logging)
    test.done()
}

exports['logging'] = {
    'is constructed properly' : function(test) {
        test.ok(unit.logging.logger)
        test.ok(unit.logging.strategies)
        test.done()
    }
}