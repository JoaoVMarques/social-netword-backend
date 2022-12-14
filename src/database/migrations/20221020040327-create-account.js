'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Accounts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      creationDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      active: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Accounts');
  }
};
