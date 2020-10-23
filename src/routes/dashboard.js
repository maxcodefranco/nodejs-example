const app = require('express')(),
    { controller: dashboardController} = require('../api/dashboard.controller'),
    { mappingRoutes } = require('../app/utils/route.utils');

mappingRoutes(app,
    ['get',     '',     dashboardController.index]);

exports.app = app;