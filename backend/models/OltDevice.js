module.exports = (sequelize, DataTypes) => {
  const OltDevice = sequelize.define('OltDevice', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    slot: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    port: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ont_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sn: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    brand: {
      type: DataTypes.ENUM('Huawei', 'ZTE'),
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  });

  return OltDevice;
};
