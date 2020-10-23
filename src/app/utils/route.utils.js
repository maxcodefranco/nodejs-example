const allowedMethodsMapping = ['get', 'post', 'delete', 'put', 'use'];

exports.mappingRoutes = (app, ...routes) => {
    routes.forEach(routeSettings => {
        if (allowedMethodsMapping.indexOf(routeSettings[0]) === -1) throw new Error('Method not allowed to mapping routes.');
        app[routeSettings[0]].apply(app, routeSettings.splice(1));
    });
};