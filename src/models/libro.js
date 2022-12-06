// definición de modelo 'Libro'
// el modelo es el objeto javascript que nos permite
// relacionarnos con la tabla "pokemons" en la base de datos

module.exports = (sequelize, DataTypes) => {
    const Libro = sequelize.define('Libro', {
      id:{
        type: DataTypes.INTEGER,
        primaryKey: true
      },  
      nombre: DataTypes.STRING,
      autorx: DataTypes.FLOAT,
      genero: DataTypes.STRING,
      sinopsis: DataTypes.STRING,
      imagen: DataTypes.STRING,
      casilla: DataTypes.STRING,
      
    }, { tableName: 'libros', timestamps: false});
    
    return Libro;
  };

  