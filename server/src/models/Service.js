module.exports = (sequelize, DataTypes) => {
  const Service = sequelize.define('Service', {
    area: DataTypes.STRING,
    date: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    pincode: DataTypes.STRING,
    timeSlot: DataTypes.STRING,
    isViewed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  })
  return Service
}
