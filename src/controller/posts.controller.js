const { postsService } = require('../service');

const getAll = async (_req, res) => {
  const message = await postsService.getAll();
  console.log(message);
  res.status(200).json(message);
};

const addPost = async (req, res) => {
  const message = await postsService.addPost(req.body);
  console.log(message);
  res.status(201).json(message);
};

module.exports = {
  getAll,
  addPost,
};