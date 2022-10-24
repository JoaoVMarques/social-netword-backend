const jwt = require('jsonwebtoken');
const { accountService } = require('../service');

const secret = process.env.JWT_SECRET;

const createToken = (user) => {
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  return jwt.sign({ data: { userId: user.id } }, secret, jwtConfig);
};

const create = async (req, res) => {
  const { body } = req;
  const message = await accountService.create(body);
  const token = createToken(body.username);
  res.status(201).json({ message, token });
};

const login = async (req, res) => {
  const { user, message, error } = await accountService.login(req.body);
  if (error) {
    return res.status(400).json({ message, error });
  }

  const token = createToken(user);

  return res.status(200).json({ message, token });
};

module.exports = {
  create,
  login,
};