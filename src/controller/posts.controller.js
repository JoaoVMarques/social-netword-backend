const getAll = (req, res) => {
  res.status(200).json({ message: 'funcionou' });
};

module.exports = {
  getAll,
};