module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    tittle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    /* 
      en las relaciones el "models.Usuario" corresponde con el nombre en BBDD,
      así que si no coincide, fallará siempre.
    */
    classMethods: {
      associate: function(models) {
        Post.belongsTo(models.User, { as: 'user' });
        Post.hasMany(models.Tag, { foreignKey: 'tagId' });
      }
    },
    timestamps: false
  });
  
  return Post;
};
