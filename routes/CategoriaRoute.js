const express = require('express');
const router = express.Router();
const CategoriaService = require('../controllers/CategoriaService');

router.get('/categoriaAdd',CategoriaService.addCategoria);


module.exports = router;