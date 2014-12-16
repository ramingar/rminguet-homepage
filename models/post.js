/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    titulo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    texto: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    fecha: {
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
        Post.belongsTo(models.Usuario, { as: 'usuario' });
        Post.hasMany(models.Tag, { foreignKey: 'tagId' });
      }
    },
    timestamps: false
  });
  
  return Post;
};
