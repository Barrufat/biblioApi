const express = require('express');

const {Libro, Imagen } = require('../models/index');
const router = express.Router();



//es imagen/:archivo ya que en index controller se definio api/imagen para este controller
router.get('/:archivo', (req, res, next) => {
    let archivoImagen = req.params.archivo;
    Imagen.findOne({ where: { archivo: archivoImagen } })
        .then(item => res.json({ ok: true, data: item }))
        .catch(err => res.json({ ok: false, error: err }));
  });



  //esto selecciona todas las Imagenes
router.get('/', (req, res, next) => {

    Imagen.findAll({include: [Libro]})
        .then(items => res.json({ ok: true, data: items }))
        .catch(err => res.json({ ok: false, error: err }));
  });




  module.exports = router;