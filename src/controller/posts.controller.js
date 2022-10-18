const { postsService } = require('../service');

const getAll = (_req, res) => {
  const message = postsService.getAll();
  res.status(200).json(message);
};

const addPost = (req, res) => {
  const message = postsService.addPost(req.body);
  res.status(201).json(message);
};

module.exports = {
  getAll,
  addPost,
};