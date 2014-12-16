/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var Usuario = sequelize.define("Usuario", {
    alias: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    pass: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    timestamps: false
  });

  return Usuario;
};
