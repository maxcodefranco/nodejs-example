const express = require('express'),
    { app: authApp} = require('./auth'),
    { app: dashboardApp } = require('./dashboard'),
    { mappingRoutes } = require('../app/utils/route.utils');

exports.useApiMapping = (app) => {
    mappingRoutes(app,
        ['use',     '/auth',     authApp],
        ['use',     '/dashboard',     dashboardApp]);
}