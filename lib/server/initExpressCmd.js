var express = require('express')
  , logRoute = require('./routes/logRoute.js');

module.exports = function initExpressCmd(app) {
    app = app || express();
    registerMiddleware(app);
    registerEndpoints(app);
    return app;
}

function registerMiddleware(app) {
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
}

function registerEndpoints(app) {
    logRoute(app);
}