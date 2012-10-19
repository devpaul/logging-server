var testutil = require('testutil')
  , SandboxedModule = require('sandboxed-module')
  , mockLogRoute
  , unit

exports['setUp'] = function(callback) {
    mockLogRoute = testutil.MockFunction()
    var sandboxOptions = { requires : {'./routes/logRoute.js' : mockLogRoute } }
    unit = SandboxedModule.require(testutil.config.testGroup.mapToUnit(__filename), sandboxOptions)
    callback();
}

exports['middleware is correctly registered'] = function(test) {
    var mock = createMockExpress()
    unit(mock)
    test.ok(mock.use.argList)
    test.equal(3, mock.use.argList.length)
    test.done()
}

function createMockExpress() {
    return { use : testutil.MockFunction() }
}

exports['routes are registered'] = function(test) {
    var mock = createMockExpress()
    unit(mock)
    test.ok(mockLogRoute.argList)
    test.equal(mockLogRoute.argList.length, 1)
    test.done()
}