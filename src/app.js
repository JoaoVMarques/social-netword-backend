const express = require('express');
const config = require('./config');
const { postsRouter } = require('./routers');

const app = express();

app.use(config);
app.use(express.json());
app.use('/posts', postsRouter);

module.exports = app;