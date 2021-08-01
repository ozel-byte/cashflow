const express = require('express');
const router = express.Router();
const CategoriaService = require('../controllers/CategoriaService');
 router.post('/categoriaAdd',CategoriaService.addCategoria);
router.get('/getCategorias',CategoriaService.getCategoria)


module.exports = router;