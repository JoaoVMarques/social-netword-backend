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
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      creationDate: {
        type: Sequelize.DATE
      },
      active: {
        type: Sequelize.BOOLEAN
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Accounts');
  }
};
