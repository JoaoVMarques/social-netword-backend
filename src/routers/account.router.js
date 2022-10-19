const express = require('express');
const { accountController } = require('../controller');
const { fieldsValidation, emailValidation, passwordValidation } = require('../middlewares');

const router = express.Router();

// Precisa ser implementado metodos de segurança !
router.post('/',
fieldsValidation,
emailValidation,
passwordValidation, accountController.create);

// router.get('/:id', accountController.get);

module.exports = router;
