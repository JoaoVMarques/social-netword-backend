const { Account } = require('../models');

const create = async (account) => {
  const accountObjectWithId = account;
  accountObjectWithId.Id = 0;
  // const message = await accountModel.create(accountObjectWithId);
  const message = 'PLACEHOLDER';
  return { message, error: null };
};

const login = async (credentials) => {
  const { email, password } = credentials;
  const userAccount = await Account.findOne({ where: { email, password } });

  if (!userAccount) {
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