module.exports = (sequelize, DataTypes) => {
  const Plant = sequelize.define('Plant', {
    name: DataTypes.STRING,
    desc: DataTypes.STRING,
    imageUrl: DataTypes.STRING
  })
  return Plant
}
