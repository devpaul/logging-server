# Basic Logging Server

[![Build Status](https://travis-ci.org/devpaul/logging-server.png?branch=master)](https://travis-ci.org/devpaul/logging-server)

A basic logging endpoint written in node

## Starting the Server

to start the server run:
`node ./app.js`

### Command-line options
See app.js for all command-line options (in case this document becomes stale)
``` bash
--port (port number) (default is port 2468)
-s or --strategy defines the logging strategy (default is syslog)
```

## Project Goals
* create a basic node service
* fully tested with unit, functional and load tests
* separation of concerns
* productionalized with up-time and monitoring module
* combines with other services modules (e.g. credentials) to form a server

## Features
* restful logging (POST/GET)
* websockets logging
* ability to attach to an express instance
* logging to console
* logging to syslog

## Testing
You can test locally with the command line:
``` bash
    npm test
```

Testing is also performed using [Travis-CI](http://travis-ci.org).
