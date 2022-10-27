const AccountSchema = (Sequelize, DataTypes) => {
  const AccountTable = Sequelize.define('Account', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    creationDate: DataTypes.DATE,
    active: DataTypes.BOOLEAN,
  },
  {
    underscored: true,
  })
  return AccountTable;
}

module.exports = AccountSchema;