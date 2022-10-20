const express = require('express');
const { accountController } = require('../controller');
const { fieldsValidation, emailValidation, passwordValidation } = require('../middlewares');

const router = express.Router();

// Precisa ser implementado metodos de segurança !
router.post('/',
fieldsValidation,
emailValidation,
passwordValidation, accountController.create);

// Precisa ser implementado os middlewares do login Objeto:
// {
//   "email": "admin@admin.com",
//   "password": "admin123"
// }
router.post('/login', accountController.login);

module.exports = router;
