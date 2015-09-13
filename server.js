'use strict';

var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var port = process.env.PORT || 3000;

var textToMeekrat = require('./lib/textToMeekrat');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

//Serve up static index.html
app.use(express.static(__dirname + '/app/'));

//Make sure index points to index.html
app.get('/', function(req, res) {
  res.sendFile('index.html');
});

//Post request for finding images
app.post('/textToMeekrat', function(req, res) {
  //Get random image from google
  var convertedText = textToMeekrat(req.body.textObj.textToConvert);
  var responseObj = {
    meekratText: convertedText
  };
  res.json(responseObj);
});

app.listen(port, function() {
  console.log('server started on port ' + port);
});
