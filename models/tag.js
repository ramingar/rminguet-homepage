/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var Tag = sequelize.define("Tag", {
    nombre: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    }
  }, {
    classMethods: {
      associate: function(models) {
        Tag.hasMany(models.Post, { foreignKey: 'postId' });
      }
    },
    timestamps: false
  });

  return Tag;
};
