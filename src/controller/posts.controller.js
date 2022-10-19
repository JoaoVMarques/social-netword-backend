const { postsService } = require('../service');

const getAll = async (_req, res) => {
  const message = await postsService.getAll();
  res.status(200).json(message);
};

const addPost = async (req, res) => {
  const message = await postsService.addPost(req.body);
  res.status(201).json(message);
};

module.exports = {
  getAll,
  addPost,
};