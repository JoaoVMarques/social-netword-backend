const fs = require('fs').promises;

const fileName = `${__dirname}/../placeholders/data.json`;

const getAll = async () => {
  const allPosts = await fs.readFile(fileName);
  return JSON.parse(allPosts);
};

const addPost = async (post) => {
  const contents = JSON.parse(await fs.readFile(fileName));
  const newPost = post;
  newPost.postId = contents.length + 1;
  
  const newContent = [newPost, ...contents];
  await fs.writeFile(fileName, JSON.stringify(newContent));
  return 'Postagem criada com sucesso!';
};

module.exports = {
  addPost,
  getAll,
};