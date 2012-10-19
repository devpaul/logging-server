var testutil = require('testutil')
  , SandboxedModule = require('sandboxed-module')
  , unit = requireUnit(__filename)

exports['registers expected routes'] = function(test) {
    var mock = { get : testutil.MockFunction()
               , post : testutil.MockFunction()
               }
      , ROUTE_DEF = '/log/:level/:program'
    unit(mock)
    test.ok(mock.get.argList)
    test.equal(mock.get.argList[0][0], ROUTE_DEF)
    test.equal(mock.post.argList[0][0], ROUTE_DEF)
    test.done()
}

