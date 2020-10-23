const { requireAuth } = require('../app/middleware/guard');
const { mappingRoutes } = require('../app/utils/route.utils');

const express = require('express'),
        app = express(),
        { controller: authController } = require('../api/auth.controller');
        
mappingRoutes(app,
        ['get',         '',             requireAuth(),    authController.index],
        ['post',        'login',        authController.login],
        ['post',        'logout',       authController.logout],
        ['get',         'profile',      requireAuth(),    authController.profile],
);

exports.app = app;