module.exports = (sequelize, DataTypes) => {
  const Service = sequelize.define('Service', {
    area: DataTypes.STRING,
    date: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    pincode: DataTypes.STRING,
    maintainenceRequired: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    timeSlot: DataTypes.STRING
  })
  return Service
}
