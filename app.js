'use strict';


var express = require('express');
var marked = require('marked');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var app = express();

app.set('view engine', 'jade');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', function(req, res){
	console.log("Got")
  res.render('index');
});
app.post('/', function(req, res){
	var markifier = marked(req.body.markey);
	res.send(markifier);
});


app.listen(3000);
