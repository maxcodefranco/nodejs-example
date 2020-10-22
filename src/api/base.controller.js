const appVersion = require('../app').getEnv("APP_NAME");


class BaseController {


    processResponse(data) {
        const responseData = {
            status: 200,
            message: null,
            version: require('../app').getEnv("APP_VERSION")
        };

        return {
            ...responseData,
            ...data
        }
    }

}

module.exports = BaseController;