const express = require('express');
const { postsController } = require('../controller');

const router = express.Router();

router.get('/', postsController.getAll);

module.exports = router;
