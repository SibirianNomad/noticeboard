const {validationResult} = require("express-validator");
const Notice = require("./../models").notice;

class NoticeController {
    getAll(req, res) {
        return res.json({value: "getAll"});
    }

    async create(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({message: "Notice error", errors})
            }
            
            Notice.create({
                userId: req.user.id,
                ...req.body
            })
            return res.json({message: "Notice successfully created"});
        } catch (e) {
            console.log(e)
            res.status(400).json({message: e.message})
        }

    }

    update(req, res) {
        return res.json({value: "update"});
    }

    delete(req, res) {
        return res.json({value: "delete"});
    }
}

module.exports = new NoticeController();
