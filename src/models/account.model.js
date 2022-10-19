const fs = require('fs').promises;

const fileName = `${__dirname}/../placeholders/accounts.json`;

const create = async (account) => {
  const accounts = JSON.parse(await fs.readFile(fileName));
  const newPost = account;
  newPost.Id = accounts.length + 1;
  
  const newContent = [newPost, ...accounts];
  await fs.writeFile(fileName, JSON.stringify(newContent));
  return 'Conta criada com sucesso!';
};

module.exports = {
  create,
};