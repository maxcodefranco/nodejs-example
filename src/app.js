exports.getEnv = global.getEnv = getEnv = function (propName) {
    return process.env[propName];
}

require('dotenv').config({ path: '../.env' });

const helmet = require('helmet'),
    routerHandler = require('./routes'),
    i18n = require('i18n');

//CONFIGURATIONS
require('./config/locale.config');

const port = getEnv("APP_PORT");

// Configure web server
routerHandler.app.use(i18n.init);
routerHandler.app.use(helmet());
routerHandler.app.use((err, req,res,next) => {
    res.json({error: err});
});
routerHandler.useApiMapping();

routerHandler.app.listen(port, function (err) {
    if(err) {
        console.error('Erro ao iniciar aplicação', err);
    }
    console.log(`Aplicação iniciada na porta ${port}`);
});