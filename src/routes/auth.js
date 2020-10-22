const { requireAuth } = require('../app/middleware/guard');

const express = require('express'),
        app = express(),
        { controller: authController } = require('../api/auth.controller');

app.use('', requireAuth , authController.index);
app.use('login', authController.login);

exports.app = app;