const {validationResult} = require('express-validator');
const User = require("./../models").user;
const bcrypt = require('bcryptjs');
const authService = require('../services/authService');

class UserController {
    async registration(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({message: "Registration error", errors})
            }
            const {username, password} = req.body;

            const candidate = await User.findAll({
                where: {
                    username
                }
            });
            if (candidate.length) {
                return res.status(400).json({message: "User already exists"})
            }
            const hashPassword = bcrypt.hashSync(password, 7);
            User.create({
                username,
                password: hashPassword
            });
            return res.json({message: "Registration success"});
        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'Registration error'})
        }

    }

    async login(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({message: "Login error", errors})
            }
            const {username, password} = req.body
            const user = await User.findAll({
                where: {
                    username
                }
            });
            if (!user) {
                return res.status(400).json({message: `User ${username} not found`})
            }

            const validPassword = bcrypt.compareSync(password, user[0].password);

            if (!validPassword) {
                return res.status(400).json({message: `Wrong password`})
            }
           
            const token = authService.generateAccessToken(user[0].id)

            return res.json({token})
        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'Login error'})
        }
    }


}

module.exports = new UserController();
