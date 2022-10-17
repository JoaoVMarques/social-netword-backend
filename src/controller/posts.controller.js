const { postsService } = require('../service');

const getAll = (_req, res) => {
  const message = postsService.getAll();
  res.status(200).json(message);
};

module.exports = {
  getAll,
};