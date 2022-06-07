'use strict'
module.exports = (sequelize, Sequelize) => {
    const Notice = sequelize.define("Notices", {
        userId: {
            type: Sequelize.INTEGER,
        },
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        createdAt: {
            type: Sequelize.DATE,
        },
        updatedAt: {
            type: Sequelize.DATE,
        }
    });
    return Notice;
};
