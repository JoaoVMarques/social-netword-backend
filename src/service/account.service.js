const { Account } = require('../models');

const create = async (account) => {
  const { username, email, password } = account;
  await Account.create({ username, email, password });
  const message = 'Conta criada com sucesso';
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
  return { user: userAccount.dataValues, message, error: null };
};

const getById = async (id) => {
  const userAccount = await Account.findOne({ where: { id } });
  return userAccount;
};

module.exports = {
  create,
  login,
  getById,
};