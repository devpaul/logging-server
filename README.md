# Basic Logging Server

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
