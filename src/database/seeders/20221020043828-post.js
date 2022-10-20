'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Posts',
    [
      {
        username: 'sistema',
        content: 'Bem-Vindo A Marques Network prazer em conhece-lo :D',
        publishDate: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Posts', null, {}),
};
