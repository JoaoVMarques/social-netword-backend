const { Post } = require('../models');

const getAll = async () => {
  const message = await Post.findAll({ limit: 10, order: [['id', 'DESC']] });
  return { message, error: null };
};

const addPost = async (post, username) => {
  const content = post.message;
  const publishDate = new Date();
  const message = await Post.create({ username, content, publishDate });
  return { message, error: null };
};

module.exports = {
  getAll,
  addPost,
};