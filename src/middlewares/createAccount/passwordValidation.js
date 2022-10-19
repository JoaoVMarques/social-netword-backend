const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

function passwordValidation(req, res, next) {
  const { password } = req.body;
  const result = password.toLowerCase().match(
    passwordRegex,
  );
  if (!result) {
    return res.status(400).json({ message: 'o /password/ é inválido', field: 'email' });
  }
  return next();
}

module.exports = passwordValidation;