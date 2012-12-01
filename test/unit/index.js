var testutil = require('testutil')

configureTestUtil()
global.requireUnit = testutil.requireUnit
global.requireSrc = testutil.requireSrc
module.exports = testutil.includeTests(__dirname)

function configureTestUtil() {
    testutil.config.testGroup = new testutil.TestGroup('test/unit', 'lib')
    testutil.config.verbose = false
}