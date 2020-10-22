const express = require('express'),
    app = express(),
    authApp = require('./auth').app,
    dashboardApp = require('./dashboard').app;

function useApiMapping() {

    app.use('/dashboard', dashboardApp);
    app.use('/auth', authApp);

}

exports.useApiMapping = useApiMapping;
exports.app = app;