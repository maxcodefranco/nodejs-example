const BaseController = require('./base.controller');

class DashboardController extends BaseController {

    constructor() {
        super();

        this.index = this.index.bind(this);
    }

    index(req, res, next) {
        return res.json(this.processResponse({name: "Max"}))
    }

}

exports.controller = new DashboardController();