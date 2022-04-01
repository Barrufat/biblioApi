const express = require('express');
const router = express.Router();

//requerimos el index.js de models que inicializa sequelize
const modelos = require('../models/index');

// importante: todas las rutas get, post… son relativas a la ruta principal
// de este controlador: /api/pokemons


// GET lista de todos los pokemons
// vinculamos la ruta /api/pokemons a la función declarada
// si todo ok devolveremos un objeto tipo:
//     {ok: true, data: [lista_de_objetos_pokemon...]}
// si se produce un error:
//     {ok: false, error: mensaje_de_error}

router.get('/', function (req, res, next) {
    //findAll es un método de sequelize!
    modelos.Pokemon.findAll( {limit: 500})
        .then(pokemons => res.json({
            ok: true,
            data: pokemons
        }))
        .catch(error => res.json({
            ok: false,
            error: error
        }))
    });

// GET de tipo /api/pokemons/7
// petición de UN pokemon, con ID=7
// "7" se recibe por parámetro y se lee con req.params.id
// en este caso utilizamos el método sequelize findOne
// con la condición "where id=7" 
// expresada en forma de objeto: { where: {id:req.params.id}}

router.get('/:id', function (req, res, next) {
    modelos.Pokemon.findOne({ where: {id: req.params.id}} )
        // .then(pokemon => pokemon.get({plain: true}))
        .then(pokemon => res.json({
            ok: true,
            data: pokemon
        }))
        .catch(error => res.json({
            ok: false,
            error: error
        }))
    });




// POST a /api/pokemons creamos un nuevo registro
// en primer lugar creamos un modelo Pokemon con el método sequelize "create"
// a partir de los datos presentes en el "body"
// a continuación, mediante "save", el objeto se guarda automáticamente
// en la base de datos y e actualiza su ID!
// igualmente se devuelve el objeto creado

router.post('/', function(req, res, next) {
    modelos.Pokemon.create(req.body)
    .then((item) => item.save())
    .then((item)=>res.json({ok: true, data:item}))
    .catch((error)=>res.json({ok:false, error}))
});
 


// PUT a /api/pokemons/X 
// en primer lugar se localiza el pokemon con id=X en la BDD
// a continuación, mediante "update", el objeto se actualiza con los datos
// presentes en el "body"
router.put('/:id', function(req, res, next) {
    modelos.Pokemon.findOne({ where: {id: req.params.id}} )
    .then((poke)=>
        poke.update(req.body)
    )
    .then((ret)=> res.json({
        ok: true,
        data: ret
    }))
    .catch(error => res.json({
        ok: false,
        error: error
    }));
});
 


// DELETE a /api/pokemons/X 
// se elimina el registro con id = X con elmétodo sequelize "destroy"
router.delete('/:id', function(req, res, next) {
    modelos.Pokemon.destroy({ where: {id: req.params.id}} )
    .then((data)=>res.json({ok: true, data}))
    .catch((error)=>res.json({ok:false, error}))
});


module.exports = router;
