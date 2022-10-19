const express = require('express');
const { accountController } = require('../controller');
const { fieldsValidation, emailValidation, passwordValidation } = require('../middlewares');

const router = express.Router();

// Precisa ser implementado metodos de segurança !
router.post('/',
fieldsValidation,
emailValidation,
passwordValidation, accountController.create);

router.post('/login', accountController.login);

module.exports = router;
