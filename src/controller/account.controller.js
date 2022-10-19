const { accountService } = require('../service');

const create = async (req, res) => {
  const message = await accountService.create(req.body);
  res.status(201).json(message);
};

module.exports = {
  create,
};