// definición de modelo 'Pokemon'
// el modelo es el objeto javascript que nos permite
// relacionarnos con la tabla "pokemons" en la base de datos

module.exports = (sequelize, DataTypes) => {
  const Pokemon = sequelize.define('Pokemon', {

    nombre: DataTypes.STRING,
    caracter: DataTypes.STRING,
    
  }, { tableName: 'pokemons', timestamps: false});
  
  return Pokemon;
};
