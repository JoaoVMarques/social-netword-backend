const express = require('express');
const { postsRouter } = require('./routers');

const app = express();

app.use('/posts', postsRouter);

module.exports = app;