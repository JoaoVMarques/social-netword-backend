const { Post } = require('../models');

const getAll = async () => {
  const message = await Post.findAll();
  return { message, error: null };
};

const addPost = async (post) => {
  const content = post.message;
  const publishDate = new Date();
  const message = await Post.create({ username: 'mainUser', content, publishDate });
  return { message, error: null };
};

module.exports = {
  getAll,
  addPost,
};