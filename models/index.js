'use strict';
const Sequelize = require('sequelize');
const config = require('../config')

let sequelize;

sequelize = new Sequelize(config.db.db_name, config.db.db_user, config.db.db_pass, {
    dialect: "postgres",
    host: config.db.db_host
})

const User = require('./user')(sequelize, Sequelize);

module.exports = {
    sequelize: sequelize,
    user: User
}
