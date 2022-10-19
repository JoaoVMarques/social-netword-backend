const fieldsValidation = (req, res, next) => {
  const requires = ['email', 'username', 'password'];
  let goNext = true;
  requires.forEach((field) => {
    if (!req.body[field]) {
      goNext = false;
      return res.status(400).json({ message: `/${field}/ é necessário`, field });
    }
  });
  if (goNext) { 
    return next(); 
  }
};

module.exports = fieldsValidation;