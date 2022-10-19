const { accountModel } = require('../models');

const create = async (account) => {
  const accountObjectWithId = account;
  accountObjectWithId.Id = 0;
  const message = await accountModel.create(accountObjectWithId);
  return { message, error: null };
};

const login = async (credentials) => {
  const credentialsMatch = await accountModel.login(credentials);

  if (!credentialsMatch || credentials.password !== credentialsMatch.password) {
    const message = 'login não autorizado';
    return { message, error: 'CREDENTIALS_DOESNT_MATCH' };
  }
  const message = 'login autorizado';
  return { message, error: null };
};

module.exports = {
  create,
  login,
};