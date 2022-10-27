const jwt = require('jsonwebtoken');
require('dotenv/config');
const { accountService } = require('../../services');

const secret = process.env.JWT_SECRET;

const validate = async (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'Token não encontrado' });
  }
  try {
    const decoded = jwt.verify(token, secret);
    const user = await accountService.getById(decoded.data.userId);

    if (!user) {
      return res.status(401).json({ message: 'Erro ao procurar usuário do token.' });
    }

    req.account = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};

module.exports = validate;