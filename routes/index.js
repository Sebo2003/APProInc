var express = require('express');
var router = express.Router();
var path = require('path');
var app = require('express')();

//HTML
router.get('/', function(req,res,next){
	res.sendFile(path.join(__dirname + "/../views/tata.html"));
});
router.get('/installation', function(req,res,next){
	res.sendFile(path.join(__dirname + "/../views/Installation.html"));
});
router.get('/contact', function(req,res,next){
	res.sendFile(path.join(__dirname + "/../views/contact.html"));
});
router.get('/payment', function(req,res,next){
	res.sendFile(path.join(__dirname + "/../views/payment.html"));
});
router.get('/service', function(req,res,next){
	res.sendFile(path.join(__dirname + "/../views/service.html"));
});
//CSS
router.get('/', function(req,res,next){
	res.sendFile(path.join(__dirname + "/../public/tata320-767.css"));
});
router.get('/', function(req,res,next){
	res.sendFile(path.join(__dirname + "/../public/tata768-1024.css"));
});
router.get('/', function(req,res,next){
	res.sendFile(path.join(__dirname + "/../public/tata1024-1500.css"));
});
router.get('/', function(req,res,next){
	res.sendFile(path.join(__dirname + "/../public/tata1501.css"));
});

module.exports = router;

