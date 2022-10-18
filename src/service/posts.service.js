const { postsModel } = require('../models');

const getAll = async () => {
  const message = await postsModel.getAll();
  return { message, error: null };
};

const createPost = (message) => {
  const createdPost = {
    postId: 0,
    user: 'mainUser',
    content: message,
    hour: '00:00',
    date: '08/10/2022',
  };
  return createdPost;
};

const addPost = async (post) => {
  const postObject = createPost(post.message);
  const message = await postsModel.addPost(postObject);
  return { message, error: null };
};

module.exports = {
  getAll,
  addPost,
};