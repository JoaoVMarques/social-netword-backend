const jwt = require('jsonwebtoken');
const { accountService } = require('../service');

const secret = process.env.JWT_SECRET;

const create = async (req, res) => {
  const message = await accountService.create(req.body);
  res.status(201).json(message);
};

const login = async (req, res) => {
  const { user, message, error } = await accountService.login(req.body);
  if (error) {
    return res.status(400).json({ message, error });
  }

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: { userId: user.id } }, secret, jwtConfig);

  return res.status(200).json({ message, token });
};

module.exports = {
  create,
  login,
};