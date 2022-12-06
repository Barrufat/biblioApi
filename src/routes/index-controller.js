const express = require('express');
const router = express.Router();


router.get('/', function (req, res, next) {
    res.send("Estas en la API Libros")
    });

module.exports = router;
