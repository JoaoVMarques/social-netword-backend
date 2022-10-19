const { accountModel } = require('../models');

const create = async (account) => {
  const accountObjectWithId = account;
  accountObjectWithId.Id = 0;
  const message = await accountModel.create(accountObjectWithId);
  return { message, error: null };
};

module.exports = {
  create,
};