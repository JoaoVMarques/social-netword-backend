const express = require('express');
const config = require('./config');
const { postsRouter, accountRouter } = require('./routers');

const app = express();

app.use(config);
app.use(express.json());
app.use('/posts', postsRouter);
app.use('/account', accountRouter);

module.exports = app;