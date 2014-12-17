var uuid   = require('node-uuid');
var crypto = require('crypto');

var hash = function(passString, salt) {
  return crypto.createHmac('sha512',salt).update(passString).digest('hex');
};

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {

    alias: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },

    pass: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    salt: {
      type: DataTypes.STRING,
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

    instanceMethods: {
      isValidPassword: function(passString) {
        return this.getDataValue('pass') === 
          hash(passString, this.getDataValue('salt'));
      }
    }
  });

  return User;
};
