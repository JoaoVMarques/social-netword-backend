const contents = require('../placeholders/data');

const getAll = () => {
  const posts = contents;
  return { error: null, message: posts };
};

const addPost = (post) => {
  console.log(post);
};

module.exports = {
  getAll,
  addPost,
};