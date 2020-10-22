const BaseController = require("./base.controller");

class AuthController extends BaseController {

    constructor() {
        super();

        this.index = this.index.bind(this);
        this.login = this.login.bind(this);
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

}


exports.controller = new AuthController();