const jwt = require('jsonwebtoken')
const config = require('./../config')

module.exports = function () {
    return function (req, res, next) {
        try {
            const token = req.headers.authorization.split(' ')[1]
            if (!token) {
                return res.status(403).json({message: "User is unauthorized"})
            }
           
            const decodedData = jwt.verify(token, config.server.jwt_secret)
            req.user = decodedData
            next()
        } catch (e) {
            console.log(e)
            return res.status(403).json({message: "User is unauthorized"})
        }
    }
};
