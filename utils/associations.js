/* Se requiere que se hayan cargado los modelos antes de cargar las relaciones */


  },{
    classMethods: {
      associate: function(models) {
        Post.hasMany(models.Usuario, { as: 'usuario' });
        Post.belongsTo(models.Usuario);
      }
    }

  },{
    classMethods: {
      associate: function(models) {
        Usuario.belongsTo(models.Post, { foreignKey: 'usuario' } ),
        Usuario.belongsTo(models.Post);
      }
    }