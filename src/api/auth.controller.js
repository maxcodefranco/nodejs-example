const BaseController = require("./base.controller");

class AuthController extends BaseController {

    constructor() {
        super();

        this.bindActions('index', 'login');
    }

    index (req, res) {
        var profile = {
            name: 'Max Franco',
            message: res.__('thxForSubscribe')
        }
        res.json(this.processResponse({profile}));
    }
 
    login (req, res) {
        res.json({status: ok})
    }

    logout (req, res) {
        res.json({status: ok})
    }

    profile (req, res) {
        res.json({status: ok})
    }

}


exports.controller = new AuthController();