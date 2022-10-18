const express = require('express');
const { postsController } = require('../controller');

const router = express.Router();

router.get('/', postsController.getAll);

router.post('/', postsController.addPost);

module.exports = router;
