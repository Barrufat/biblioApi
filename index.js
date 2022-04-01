//importamos/requerimos express
const express = require('express');
const cors = require('cors');

//importamos los controladores que contienen las definiciones de las rutas
const pokemonsController = require('./routes/pokemon-controller');
const indexController = require('./routes/index-controller');

//creamos una nueva aplicación express
const app = express();


app.use(express.json()); //necesario para poder recibir datos en json
app.use(cors()); //evita problemas al conectar desde otro servidor

//las ruta "/" se gestiona en indexController
app.use('/', indexController);
//las rutas que empiecen por /api/pokemons se dirigirán a pokemonsController
app.use('/api/pokemons', pokemonsController);

//arranque del servidor
const port = 3000
app.listen(port, () => console.log(`Express en puerto ${port}!`))
