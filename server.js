//Modules
var http = require('http');
var app = require('express');
var app = app();
var path = require('path');
var hbs = require('express-handlebars');
//Routes
var express = require('express');
var routes = require('./routes/index.js');
//Server
var hostname = '127.0.0.1';
var port = 8000;

//Static files
app.use(express.static(path.join(__dirname +'views')));
app.use(express.static(path.join(__dirname +'/public')));
app.use("/", routes);


//View engine setup
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'tata', layoutsDir: __dirname + '/views'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//Live server
var server = http.createServer(function(req,res){
	res.statusCode = 200;
	res.setHeader('Content-Type','text/html');
	res.end('Still in server.js');
});

app.listen(8000);

module.exports = app;