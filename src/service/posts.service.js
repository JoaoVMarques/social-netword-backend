const contents = require('../placeholders/data');

const getAll = () => {
  const posts = contents;
  return { error: null, message: posts };
};

module.exports = {
  getAll,
};