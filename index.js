//importamos/requerimos express
const express = require('express');
const cors = require('cors');

//importamos los controladores que contienen las definiciones de las rutas
// const pokemonsController = require('./routes/pokemon-controller');
// const indexController = require('./routes/index-controller');
// const jugadoresController = require('./routes/jugadores-controller');
const librosController = require('./routes/libros-controller');
const indexController = require('./routes/index-controller');
const imagenController = require('./routes/imagen-controller');

//creamos una nueva aplicación express
const app = express();


app.use(express.json()); //necesario para poder recibir datos en json
app.use(cors()); //evita problemas al conectar desde otro servidor

//las ruta "/" se gestiona en indexController
app.use('/', indexController);

//ruta estática para imágenes
app.use("/img", express.static('uploads'));

//las rutas que empiecen por /api/libros se dirigirán a librosController
app.use('/api/libros', librosController);
app.use('/api/imagen', imagenController);

//arranque del servidor
const port = 3030
app.listen(port, () => console.log(`Express en puerto ${port}!`))
