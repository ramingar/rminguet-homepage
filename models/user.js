var uuid   = require('node-uuid');
var crypto = require('crypto');

var hash = function(passString, salt) {
  return crypto.createHmac('sha512',salt).update(passString).digest('hex');
};

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {

    alias: {
      type: DataTypes.STRING(150),
      unique: true,
      allowNull: false,
    },

    pass: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },

    salt: {
      type: DataTypes.STRING(150),
      allowNull: false,
    }

  }, {

    timestamps: false,

    setterMethods: {
      pass: function(passString) {
        this.salt = uuid.v4();
        return this.setDataValue(
          'pass', 
          hash(passString, this.getDataValue('salt'))
        );
      }
    },

    classMethods: {
      associate: function(models) {
        User.hasMany(models.Post, { foreignKey: 'userId' });
      }
    },

    instanceMethods: {
      isValidPassword: function(passString) {
        return passString && (this.getDataValue('pass') === 
          hash(passString, this.getDataValue('salt')));
      }
    }
  });

  return User;
};