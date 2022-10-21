const express = require('express');
const { postsController } = require('../controller');
const validateJWT = require('../middlewares/JWT/validateJWT');

const router = express.Router();

router.get('/', postsController.getAll);

router.post('/', validateJWT, postsController.addPost);

module.exports = router;
