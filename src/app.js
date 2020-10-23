const path          = require('path'),
    helmet          = require('helmet'),
    i18n            = require('i18n'),
    app             = require('express')(),
    cookieParser    = require('cookie-parser'),
    bodyParser      = require('body-parser');

//CONFIGURATIONS
require('dotenv').config({ path: path.join(__dirname, '../.env') });
require('./config/locale.config');

exports.getEnv = global.getEnv = getEnv = (propName) => process.env[propName];

const { useApiMapping } = require('./routes');

const errorMiddleware = (err, req, res, next) => {
    res.json({error: err});
}

// Configure web server
[
    i18n.init,
    cookieParser(),
    bodyParser.urlencoded({extended: true}),
    helmet(),
    errorMiddleware
].forEach(middleware => app.use(middleware));

useApiMapping(app);

exports.app = app;