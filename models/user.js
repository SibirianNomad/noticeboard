'use strict'
module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("Users", {
        username: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        createdAt: {
            type: Sequelize.DATE,
        },
        updatedAt: {
            type: Sequelize.DATE,
        }
    });
    return User;
};
