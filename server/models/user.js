module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING
    },
    firstName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    passwordDigest: {
      allowNull: false,
      type: DataTypes.STRING
    },
    RoleId: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {
    classMethods: {
      associate(models) {
        User.belongsTo(models.Role, {
          onDelete: 'CASCADE',
          foreignKey: { allowNull: false }
        });

        User.hasMany(models.Document, { foreignKey: 'OwnerId' });
      }
    }
  });
  return User;
};
