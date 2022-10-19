const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function emailValidation(req, res, next) {
  const { email } = req.body;
  const result = email.toLowerCase().match(
    emailRegex,
  );
  if (!result) {
    return res.status(400).json({ message: 'o /email/ é inválido', field: 'email' });
  }
  return next();
}

module.exports = emailValidation;