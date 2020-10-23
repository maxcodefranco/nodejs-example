const appVersion = require('../app').getEnv("APP_NAME");


class BaseController {

    bindActions(...actions) {
        actions.forEach(action => this[action] = this[action].bind(this));
    }

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