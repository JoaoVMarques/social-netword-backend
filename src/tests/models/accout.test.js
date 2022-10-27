const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const accountModel = require('../../models/accout.model');

describe('O model de account', () => {
  const Account = accountModel(sequelize, dataTypes);
  const account = new Account();

  describe('possui o nome "Account"', () => {
    checkModelName(Account)('Account');
  });

  describe('possui todas as propriedades necessárias', () => {
    const PROPERTIES = ['username', 'email', 'password', 'creationDate', 'active'];
    PROPERTIES.forEach(checkPropertyExists(account));
  });
});