module.exports = (sequelize, DataTypes) => {
  const Fish = sequelize.define('Fish', {
    name: DataTypes.STRING,
    desc: DataTypes.STRING,
    imageUrl: DataTypes.STRING
  })
  return Fish
}
