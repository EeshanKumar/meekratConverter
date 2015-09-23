'use strict';

var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var port = process.env.PORT || 3000;

app.use(bodyparser.json());

//Serve up static index.html
app.use(express.static(__dirname + '/app/'));
app.use(bodyparser.urlencoded({ extended: true }));

//Make sure index points to index.html
app.get('/', function(req, res) {
  res.sendFile('index.html');
});

//Post request for finding images
app.post('/textToMeekrat', function(req, res) {
  var textToMeekrat = require('./lib/textToMeekrat');
  console.log(req.body);

  var convertedText = textToMeekrat.convertToMeekrat(req.body.textToConvert);
  var responseObj = {
    meekratText: convertedText
  };
  res.json(responseObj);
});

app.listen(port, function() {
  console.log('server started on port ' + port);
});
