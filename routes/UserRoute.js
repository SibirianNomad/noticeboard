const Router = require("express");
const router = new Router();
const controller = require("./../controllers/UserController");
const {check} = require('express-validator');
const authMiddleware = require('./../middlewaree/authMiddleware')

router
    .get("/", controller.get)
    .post("/registration", [
        check('username', "Username must not be empty").notEmpty(),
        check('password', "Password must not be more 4 and less 10 letters").isLength({min: 4, max: 10})
    ], controller.registration)
    .post("/login", [
        check('username', "Username must not be empty").notEmpty(),
        check('password', "Password must not be empty").notEmpty()
    ], controller.login)
    .patch("/", authMiddleware(), controller.update);

module.exports = router;
