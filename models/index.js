'use strict';
const Sequelize = require('sequelize');
const config = require('../config')

let sequelize;

sequelize = new Sequelize(config.db.db_name, config.db.db_user, config.db.db_pass, {
    dialect: "postgres",
    host: config.db.db_host
})

const User = require('./user')(sequelize, Sequelize);
const Notice = require('./notice')(sequelize, Sequelize);

User.hasMany(Notice, {
    foreignKey: 'userId'
});
Notice.belongsTo(User, {
    foreignKey: 'id'
});

module.exports = {
    sequelize: sequelize,
    user: User,
    notice: Notice
}
