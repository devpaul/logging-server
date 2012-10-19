var testutil = require('testutil')
  , path = require('path')

testutil.config.verbose = false
testutil.setSrcFolder('lib')
global.requireUnit = testutil.requireUnit
module.exports = testutil.includeTests(__dirname)