const Router = require("express");
const router = new Router();
const controller = require("./../controllers/NoticeController");
const authMiddleware = require('./../middlewaree/authMiddleware')
const {check} = require("express-validator");

router
    .get("/", controller.getAll)
    .post("/", [
        check('title', "Title must not be empty").notEmpty(),
        check('description', "Description must not be empty").notEmpty()
    ], authMiddleware(), controller.create)
    .put("/", controller.update)
    .delete("/", controller.delete);

module.exports = router;
