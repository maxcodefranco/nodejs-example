const express = require('express'),
    app = express();

// controllers
var { controller: dashboardController} = require('../api/dashboard.controller');

app.get('', dashboardController.index)

exports.app = app;