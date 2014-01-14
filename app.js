
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var routes = require('./routes'); // if there is no package.json file present in the directory, then node will attempt to load an index.js or index.node file out of that directory.
var person = require('./routes/person');

var app = express(); // creates a new application

// all environments
app.set('port', process.env.PORT || 5000);
app.set('views', path.join(__dirname, 'views')); // the view directory path, defaulting to "./views"
app.set('view engine', 'ejs'); // the default engine extension to use when omitted || Embedded JavaScript

app.use(express.favicon()); // setup favicon. Not passing a path will use the default express favicon
app.use(express.logger('dev')); // log every request (http://www.senchalabs.org/connect/logger.html)
app.use(express.json()); // http://www.senchalabs.org/connect/json.html
app.use(express.urlencoded()); // http://www.senchalabs.org/connect/urlencoded.html
app.use(express.methodOverride()); // http://www.senchalabs.org/connect/methodOverride.html
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public'))); // http://www.senchalabs.org/connect/static.html

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler()); // http://www.senchalabs.org/connect/errorHandler.html
}

app.get('/', routes.index);
app.get('/persons', person.list);
app.get('/persons/:personId', person.get);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

