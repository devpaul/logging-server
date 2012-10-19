var util = require('util')
  , logger = require('../../logging/logger.js')

module.exports = function logRoute(app) {
    app.get('/log/:level/:program', route)
    app.post('/log/:level/:program', route)
}

function route(req, res) {
    "use strict"
    var level = req.params.level
      , program = req.params.program
      , data = req.param("msg")
      , msg = util.format("[%s] [host:%s]: %s", level, req.host, data)

    logger(level, msg, program)
    res.send(200)
}