class UserController {
    getAll(req, res) {
        return res.json({value: "getAll"});
    }

    create(req, res) {
        return res.json({value: "create"});
    }

    update(req, res) {
        return res.json({value: "update"});
    }

    delete(req, res) {
        return res.json({value: "delete"});
    }
}

module.exports = new UserController();
