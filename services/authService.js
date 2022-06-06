const jwt = require('jsonwebtoken');
const config = require('./../config')

module.exports = {
    generateAccessToken(id) {
        return jwt.sign({id}, config.server.jwt_secret, {expiresIn: "24h"})
    }
}
