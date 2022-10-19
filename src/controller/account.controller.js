// const get = async (_req, res) => {
//   res.status(200).json({ email: 'test@gmail.com', user: 'test2', password: '1232323232' });
// };

const createAccount = async (_req, res) => {
  res.status(201).json({ message: 'criada com sucesso' });
};

module.exports = {
  // get,
  createAccount,
};