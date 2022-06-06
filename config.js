require('dotenv').config()

const config = {
    server: {
        host: String(process.env.HOST),
        port: Number(process.env.PORT),
        jwt_secret: process.env.JWT_SECRET,
    },
    db: {
        db_name: String(process.env.DB_NAME),
        db_host: String(process.env.DB_HOST),
        db_user: String(process.env.DB_USER),
        db_pass: String(process.env.DB_PASS)
    }
}

module.exports = config
