const PostSchema = (Sequelize, DataTypes) => {
  const PostTable = Sequelize.define('Post', {
    username: DataTypes.STRING,
    content: DataTypes.STRING,
    publishDate: DataTypes.DATE,
  })
  return PostTable;
}

module.exports = PostSchema;