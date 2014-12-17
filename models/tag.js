module.exports = function(sequelize, DataTypes) {
  var Tag = sequelize.define("Tag", {
    name: {
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
