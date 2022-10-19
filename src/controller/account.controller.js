const { accountService } = require('../service');

const create = async (req, res) => {
  const message = await accountService.create(req.body);
  res.status(201).json(message);
};

const login = async (req, res) => {
  const { message, error } = await accountService.login(req.body);
  if (error) {
    return res.status(400).json({ message, error });
  }
  return res.status(200).json({ message });
};

module.exports = {
  create,
  login,
};