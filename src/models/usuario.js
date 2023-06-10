// definición de modelo 'Libro'
// el modelo es el objeto javascript que nos permite
// relacionarnos con la tabla "libros" en la base de datos

module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('Usuario', {
      id:{
        type: DataTypes.INTEGER,
        primaryKey: true
      },  
      name: DataTypes.STRING,
      password: DataTypes.STRING,
      nation: DataTypes.STRING,
      rol: DataTypes.STRING,
      
    }, { tableName: 'usuarios', timestamps: false});
    
    return Usuario;
  };

  