'use strict';

var express = require('express');
var app = express();

var server = app.listen(3000, function () {
	console.log('server started');
});