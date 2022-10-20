'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Accounts',
    [
      {
        username: 'admin',
        email: 'admin@admin.com',
        password: 'admin123',
        creationDate: Sequelize.literal('CURRENT_TIMESTAMP'),
        active: true,
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Accounts', null, {}),
};
